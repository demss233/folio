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
        className={`flex mx-auto mt-14 flex-col gap-3 ${open ? "hidden" : ""}`}
      >
        <div className="border-b-2 border-b-[#494949] pb-4 flex text-white font-semibold flex-col gap-2">
          <h1 className="text-3xl">Shiv Satyam</h1>
          <p>17, India 🚩</p>
        </div>
        <div>
          <p className="text-[#E5E7EB] mt-3">
            Hey, I’m Shiv Satyam! I am a JEE Aspirant and Web / App Developer
            from India. <br />
            <br></br>I am really interested in Machine Learning and Artificial
            Intelligence. I also like to think, maybe that is a reason why i
            love competitive programming and problem solving in general.
          </p>
        </div>
        <div className="mt-6">
          <img src="hero.png" alt="" className="opacity-[70%]" />
        </div>
      </div>
    </>
  );
}
