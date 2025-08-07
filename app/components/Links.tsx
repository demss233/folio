"use client";
import React from "react";

export default function Links() {
  return (
    <>
      <div className=" pb-4 flex text-[#e5e5e5]  flex-col gap-2 mt-8">
        <h1 className="text-2xl font-semibold">Online Presence</h1>
        <ul className="ml-8 flex flex-col gap-4">
          <li className="cursor-pointer">
            <a
              href="https://github.com/demss233"
              className="text-[#e5e5e5] underline underline-offset-4"
            >
              Github
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://www.codechef.com/users/sativ"
              className="text-[#e5e5e5] underline underline-offset-4"
            >
              Codechef
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://codeforces.com/profile/poindexter1729"
              className="text-[#e5e5e5] underline underline-offset-4"
            >
              Codeforces
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://www.kaggle.com/shivsatyam"
              className="text-[#e5e5e5] underline underline-offset-4"
            >
              Kaggle
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://hackerrank.com/profile/I_HATE_BITWISE"
              className="text-[#e5e5e5] underline underline-offset-4"
            >
              Hackerrank
            </a>
          </li>
          <li className="cursor-pointer">
            <a
              href="https://www.linkedin.com/in/shiv-satyam/"
              className="text-[#e5e5e5] underline underline-offset-4"
            >
              Linkedin
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
