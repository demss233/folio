"use client";
import React from "react";
import Image from "next/image";

export default function Tech() {
  return (
    <>
      <div className="pb-4 flex text-[#e5e5e5] flex-col gap-2 mt-8">
        <h1 className="text-2xl font-semibold">my tech stack</h1>
        <ul className="ml-8 flex flex-col gap-4">
          <li>
            Programming Languages: HTML, CSS, Python, JavaScript, C, C++, Rust,
            SASS, SQL, Golang.
          </li>
          <li>
            Frontend Libraries/Tools: React.js, Redux, Tailwind, Bootstrap,
            Three.js, Clerk.js, Redux, React Native, Puppeteer, WebSocket.
          </li>
          <li>Frontend Frameworks: Next.js, Gatsby, Astro, Angular.</li>
          <li>
            Backend Frameworks/Libraries: Django, Flask, Node.js, Express.js
          </li>
          <li>Databases: MongoDB, SQL, Postgres</li>{" "}
          <li>
            Other Tools/Platforms: Webflow, Appwrite, Figma, Git, Neovim,
            Shadcn.
          </li>
        </ul>
      </div>
    </>
  );
}
