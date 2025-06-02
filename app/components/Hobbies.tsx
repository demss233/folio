"use client";
import React from "react";
import Image from "next/image";

export default function Hobbies() {
  return (
    <>
      <div className=" pb-4 flex text-[#e5e5e5]  flex-col gap-2 mt-8">
        <h1 className="text-2xl font-semibold">Hobbies ?</h1>
        <ul className="ml-8 flex flex-col gap-4">
          <li className="cursor-pointer">Singing</li>
          <li className="cursor-pointer">Writing Stuff</li>
          <li className="cursor-pointer">Cubing</li>
        </ul>
      </div>
    </>
  );
}
