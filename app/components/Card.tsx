import React from "react";

type param = {
  id: string;
  title: string;
  content: string;
  author: object;
  image: object;
  teaser: string;
};

export default function Card({ params }: { params: param }) {
  return (
    <>
      <div className="cursor-pointer gap-2 flex flex-col bg-[#1e1e1e] p-3 hover:scale-105 transition-all rounded-sm">
        <h1 className="text-white font-semibold text-[16px]">{params.title}</h1>
        <p className="text-[#aaaaaa]">
          {params.teaser}{" "}
          <a
            href={`/blog/post/${params.id}`}
            className="text-[#e5e5e5] underline underline-offset-4"
          >
            Read More
          </a>
        </p>
      </div>
    </>
  );
}
