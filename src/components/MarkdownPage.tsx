/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "github-markdown-css/github-markdown-light.css";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface MarkdownPageProps {
  title: string;
  content: string;
  lastUpdated?: string;
}

const MarkdownPage: React.FC<MarkdownPageProps> = ({
  title,
  content,
  lastUpdated,
}) => {
  return (
    <section
      className={`px-3 xs:px-4 sm:px-6 lg:px-8 pt-16 pb-12 sm:pb-16 md:pb-20 lg:pb-24 bg-background ${montserrat.className}`}
    >
      {/* Header Section */}
      <div className="relative px-2 sm:px-6 lg:px-8 pt-0 pb-12 sm:pb-20">
        <div className="max-w-[1600px] mx-auto bg-[#fff9f0] rounded-[2.5rem] px-6 py-16 md:py-24 relative overflow-hidden text-center mb-10 sm:mb-12 lg:mb-16">
          {/* Soft Glow */}
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/40 blur-[100px] opacity-70 pointer-events-none"></div>

          <h1 className="relative z-10 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-3 sm:mb-4 px-2 text-black">
            {title}
          </h1>

          {lastUpdated && (
            <p className="relative z-10 text-black/70 mt-4 max-w-2xl mx-auto text-base sm:text-lg px-4">
              Last updated: {lastUpdated}
            </p>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-[1600px] mx-auto bg-[#dbe0ff] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] p-6 xs:p-8 sm:p-10 md:p-12 lg:p-16 xl:p-20 text-black overflow-hidden">
        <div className="bg-white rounded-3xl p-6 sm:p-10 md:p-14 shadow-sm max-w-5xl mx-auto">
          <article className="markdown-body" style={{ fontFamily: "inherit" }}>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </section>
  );
};

export default MarkdownPage;
