import { NextResponse } from "next/server";
import Parser from "rss-parser";

interface CustomFeedItem {
  "content:encoded"?: string;
  enclosure?: { url: string };
  description?: string;
  link: string;
  title?: string;
  pubDate?: string;
  content?: string;
  categories?: string[];
  [key: string]: unknown;
}

export async function GET() {
  const parser = new Parser<{ [key: string]: unknown }, CustomFeedItem>({
    customFields: {
      item: ["content:encoded", "media:content"],
    },
  });

  try {
    const feed = await parser.parseURL(
      "https://medium.com/feed/@drmalotdentalclinic",
    );

    const items = feed.items.map((item) => {
      // Find image in content
      const content = item["content:encoded"] || item.content || "";
      let thumbnail = "";

      // Try to find image in content
      const imgMatch = content.match(/<img[^>]+src="([^">]+)"/);
      if (imgMatch) {
        thumbnail = imgMatch[1];
      } else if (item.description) {
        // Fallback: Check description for image
        const descImgMatch = item.description.match(/<img[^>]+src="([^">]+)"/);
        if (descImgMatch) {
          thumbnail = descImgMatch[1];
        }
      }

      // Filter out tracking pixel (1x1 images)
      if (thumbnail && thumbnail.includes("stat?event=post.clientViewed")) {
        thumbnail = "";
      }

      // Generate description from content:encodedSnippet or strip HTML from content:encoded
      let description = item["content:encodedSnippet"] || "";

      if (!description && item["content:encoded"]) {
        // Simple HTML strip if snippet is missing
        description = item["content:encoded"]
          .replace(/<[^>]+>/g, "")
          .substring(0, 300);
      } else if (!description && item.contentSnippet) {
        description = item.contentSnippet;
      }

      return {
        title: item.title,
        link: item.link,
        pubDate: item.pubDate,
        thumbnail: thumbnail, // This will be empty string if no valid image found
        description: description,
        categories: item.categories,
      };
    });

    return NextResponse.json({ items });
  } catch (error) {
    console.error("Error fetching Medium feed:", error);
    return NextResponse.json(
      { error: "Failed to fetch feed" },
      { status: 500 },
    );
  }
}
