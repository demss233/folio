import React from "react";
import { remark } from "remark";
import html from "remark-html";
import Footer from "./Footer";

const options = {
  weekday: "short",
  year: "numeric",
  month: "long",
  day: "numeric",
};

function formatDate(date: any) {
  const currentDate = new Date(date);
  const formattedDate = currentDate.toLocaleDateString("en-US", options);
  return formattedDate.split(",").join(" ");
}

export default async function Blog({ post }: { post: any }) {
  const processedContent = await remark().use(html).process(post.post.content);
  const contentHtml = processedContent.toString();
  return (
    <>
      <div className="mt-10 flex flex-col gap-4">
        <div className="text-[#aaaaaa] font-medium">
          {post.post.author.updatedBy.name},{" "}
          {formatDate(post.post.author.updatedAt)}
        </div>

        <div
          className="text-white flex flex-col gap-4"
          dangerouslySetInnerHTML={{
            __html: contentHtml,
          }}
        ></div>
      </div>
      <Footer></Footer>
    </>
  );
}
