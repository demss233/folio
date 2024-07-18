"use client";
import React from "react";
import Image from "next/image";

export default function Tech() {
  return (
    <>
      <div className=" pb-4 flex text-white  flex-col gap-2 mt-14">
        <h1 className="text-2xl font-semibold">My Tech Stack</h1>
        <ul className="ml-8 flex flex-col gap-4">
          <li>
            Programming Languages: HTML, CSS, Python, JavaScript, C, C++, Rust,
            SASS, SQL, Golang.
          </li>
          <li>
            Frontend Libraries/Tools: React.js, Redux, Tailwind, Bootstrap,
            Three.js, Clerk.js, Redux, React Native, Puppeteer, WebSocket.
          </li>
          <li>Frontend Frameworks: Next.js, Gatsby, Astro, Angular. Backend</li>
          <li>Frameworks/Libraries: Django, Flask, Node.js, Express.js</li>
          <li>Database: MongoDB, SQL, Postgres</li>{" "}
          <li>
            Other Tools/Platforms: Webflow, Appwrite, Figma, Git, Neovim,
            Shadcn.
          </li>
        </ul>
      </div>
    </>
  );
}
