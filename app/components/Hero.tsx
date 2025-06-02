"use client";
import React from "react";
import { useContext } from "react";
import { MenuContext } from "@/context/Menu";
import Image from "next/image";

export default function Hero() {
  const { open } = useContext(MenuContext);

  return (
    <>
      <div
        className={`flex mx-auto mt-6 flex-col gap-3 ${open ? "hidden" : ""}`}
      >
        <div>
          <p className="text-[#aaaaaa] text-[16px] font-medium">
            hey there 👋. I like{" "}
            <span className="text-[#e5e5e5] underline underline-offset-4">
              neovim
            </span>
            {", "}{" "}
            <span className="text-[#e5e5e5] underline underline-offset-4">
              nextjs
            </span>{" "}
            and{" "}
            <span className="text-[#e5e5e5] underline underline-offset-4">
              minimalism.
            </span>
            <br></br>
            <br></br>i like developing web apps. i am proficient in react native
            too. i used to be a competitive programmer, but nowadays i tend to
            develop more.
            <br></br>
            <br></br>
            apart from programming, i am pretty interested in maths, and problem
            solving in general.
            <br></br>
          </p>
          <div className="mt-5 flex gap-5">
            <a href="#" className="text-[#e5e5e5] underline underline-offset-4">
              github
            </a>
            <a href="#" className="text-[#e5e5e5] underline underline-offset-4">
              codechef
            </a>
            <a href="#" className="text-[#e5e5e5] underline underline-offset-4">
              codepen
            </a>
            <a href="#" className="text-[#e5e5e5] underline underline-offset-4">
              hackerrank
            </a>
            <a href="#" className="text-[#e5e5e5] underline underline-offset-4">
              codeforces
            </a>
          </div>
        </div>
        <div className="w-full mt-5">
          <img src="/hero.png" alt="" className="opacity-[70%]" />
        </div>
      </div>
    </>
  );
}
