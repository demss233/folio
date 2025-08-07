"use client";
import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <>
      <div className=" pb-4 flex text-[#e5e5e5]  flex-col gap-2 mt-8">
        <h1 className="text-2xl font-semibold">Experience</h1>
        <ul className="ml-8 flex flex-col gap-4">
          <li>
            Did freelance work through an agency, working under a project
            manager.
          </li>
          <li>
            Been coding for ~8 years, built lots of stuff with different stacks.
          </li>
          <li>
            Learned a ton from open-source code and reading good documentation.
          </li>
          <li>
            I have learned alot from other's source codes and documentations.
          </li>
        </ul>
      </div>
    </>
  );
}
