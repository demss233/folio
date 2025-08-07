"use client";
import React from "react";
import Image from "next/image";

export default function Tech() {
  return (
    <>
      <div className="pb-4 flex text-[#e5e5e5] flex-col gap-2 mt-8">
        <h1 className="text-2xl font-semibold">
          Technologies I have Worked With
        </h1>
        <ul className="ml-8 flex flex-col gap-4">
          <li>
            Programming Languages: HTML, CSS, Python, JavaScript, C, C++, Rust,
            SASS, SQL, Go.
          </li>
          <li>
            Frontend Libraries/Tools: React.js, Next.js, Three.js, Tailwind,
            Bootstrap, Redux, Gatsby, Astro, Angular.
          </li>
          <li>Mobile: React Native</li>{" "}
          <li>
            Backend Frameworks/Libraries: Django, Flask, Node.js, Express.js.
          </li>
          <li>Databases: MongoDB, SQL, Postgres</li>{" "}
          <li>
            Platforms & Tools: Webflow, Appwrite, Figma, Git, Neovim, Shadcn.
          </li>
          <li>State Management: Redux, Context API.</li>{" "}
        </ul>
      </div>
    </>
  );
}
