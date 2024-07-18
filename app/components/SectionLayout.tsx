"use client";
import React from "react";
import { useContext } from "react";
import { MenuContext } from "@/context/Menu";

export default function SectionLayout({ children }: { children: any }) {
  const { open } = useContext(MenuContext);

  return (
    <div
      className={`md:w-[60%] sm:w-[90%] w-[99%] mx-auto md:max-w-[1500px] ${
        open ? "hidden" : ""
      }`}
    >
      {children}
    </div>
  );
}
