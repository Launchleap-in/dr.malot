/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { ArrowRight, Rss } from "lucide-react";
import { AnimatedCard } from "@/src/components/ui/animated-card";

const montserrat = Montserrat({ subsets: ["latin"] });

interface BlogPost {
  thumbnail: string;
  title: string;
  subtitle: string;
  pubDate: string;
  link: string;
}

const BlogShowcase: React.FC = () => {
  const [blogPosts, setPosts] = useState<BlogPost[]>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>();

  const username = "anshulsharmasde";
  const limit = 6;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch(
          `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${username}`,
        );
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const feed = await res.json();
        if (feed.status !== "ok") {
          throw new Error(feed.message || "Failed to fetch valid RSS feed.");
        }

        const blogPosts = feed.items.slice(0, limit).map((item: any) => ({
          title: item.title || "No title available",
          subtitle: item.description
            ? new DOMParser()
                .parseFromString(item.description, "text/html")
                .body.textContent?.slice(0, 120) + "..."
            : "No subtitle available",
          thumbnail:
            item.thumbnail ||
            "https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg",
          link: item.link || "#",
          pubDate: item.pubDate || "No date available",
        }));
        setPosts(blogPosts);
      } catch (err: any) {
        console.error("Error fetching blog posts:", err);
        setError(`Failed to load blog posts: ${err.message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, [username, limit]);

  return (
    <section
      className={`px-3 xs:px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24 bg-background ${montserrat.className}`}
    >
      <div className="max-w-[1600px] mx-auto bg-cream rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-black overflow-hidden">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 lg:mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-sm rounded-full text-xs sm:text-sm font-bold mb-3 sm:mb-4 text-black border border-black/5">
            <Rss className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Our Blog</span>
          </div>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4 px-2">
            Insights from Our Experts
          </h2>
          <p className="text-black/60 max-w-2xl mx-auto text-base sm:text-lg px-4">
            Stay updated with the latest news, tips, and articles on dental
            health and wellness from our experienced team.
          </p>
        </motion.div>

        {/* Content */}
        <div>
          {isLoading && (
            <div className="text-center text-base sm:text-lg font-medium py-12 sm:py-16">
              Loading blog posts...
            </div>
          )}

          {error && (
            <div className="text-center text-sm sm:text-base lg:text-lg text-red-600 bg-red-50 border border-red-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 max-w-2xl mx-auto">
              {error}
            </div>
          )}

          {!isLoading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 xs:gap-5 sm:gap-6 lg:gap-8">
              {blogPosts?.map((post: BlogPost, index: number) => (
                <AnimatedCard
                  key={index}
                  delay={index * 0.1}
                  className="bg-white p-0 flex flex-col group cursor-pointer border border-black/5 shadow-sm hover:shadow-xl transition-shadow duration-300"
                  onClick={() => window.open(post.link, "_blank")}
                >
                  {/* Image Container */}
                  <div className="relative w-full h-48 xs:h-52 sm:h-56 md:h-60 lg:h-56 xl:h-64 overflow-hidden rounded-t-2xl sm:rounded-t-3xl">
                    <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      style={{ objectFit: "cover" }}
                      className="transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 xs:p-5 sm:p-6 flex flex-col flex-grow">
                    <h3 className="text-lg xs:text-xl sm:text-xl font-bold text-black mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-black/60 text-sm sm:text-sm mb-3 sm:mb-4 flex-grow line-clamp-3">
                      {post.subtitle}
                    </p>
                    <div className="flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 xs:gap-0 mt-auto pt-3 sm:pt-4 border-t border-black/5">
                      <span className="text-xs sm:text-xs text-black/50 font-medium">
                        {new Date(post.pubDate).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <div className="inline-flex items-center text-black font-semibold">
                        <span className="mr-2 text-sm">Read More</span>
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogShowcase;
