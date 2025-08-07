"use client";
import React from "react";

export default function SectionLayout({ children }: { children: any }) {
  return (
    <div className={`md:w-[65%] sm:w-[99%] w-[99%] mx-auto md:max-w-[1500px]`}>
      {children}
    </div>
  );
}
