"use client";
import React from "react";

export default function Hero() {
  return (
    <>
      <div className={`flex mx-auto mt-6 flex-col gap-3`}>
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
              tensorflow.
            </span>
            <br></br>
            <br></br>I enjoy building web apps and work comfortably with React
            Native too. I used to be into competitive programming, but these
            days I focus more on development.
            <br></br>
            <br></br>I work with deep learning, both in computer vision and NLP
            using TensorFlow and PyTorch. You'll also find me active on Kaggle.{" "}
            <br></br>
            <br></br>I like math and solving problems, its just something i have
            always enjoyed.
            <br></br>
            <br></br>
            <span className="text-[#e5e5e5] underline underline-offset-4">
              Currently exploring:
            </span>{" "}
            diffusion models / agentic LLMs / LLM + vision pipelines / vector
            databases
          </p>
          {/* <div className="mt-5 flex gap-5">
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
            <a href="#" className="text-[#e5e5e5] underline underline-offset-4">
              kaggle
            </a>
          </div> */}
        </div>
        <div className="w-full mt-5">
          <img
            className="rounded-lg"
            src="https://i.redd.it/52j775lsqut71.jpg"
          ></img>
          {/* <img src="/hero.png" alt="" className="opacity-[70%]" /> */}
        </div>
      </div>
    </>
  );
}
