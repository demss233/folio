"use client";
import React from "react";
import Image from "next/image";

export default function Experience() {
  return (
    <>
      <div className=" pb-4 flex text-white  flex-col gap-2 mt-12">
        <h1 className="text-2xl font-semibold">Any experience ?</h1>
        <ul className="ml-8 flex flex-col gap-4">
          <li>
            I have worked on some freelance projects when i was working for a
            freelancing agency under a project manager.
          </li>
          <li>
            Really thankful to that agency for giving me the kind of experience
            i needed.
          </li>
          <li>
            I have been programming for 6 years now. I have made a variety of
            projects with different technologies.
          </li>
          <li>
            I have learned alot from other’s source codes and documentations
          </li>
        </ul>
      </div>
    </>
  );
}
