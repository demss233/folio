"use client";
import React from "react";
import { motion } from "framer-motion";
import BogusNavbar from "./BogusNavbar";
import { useState } from "react";
import { useContext } from "react";
import { MenuContext } from "@/context/Menu";

export default function Navbar() {
  const { open, setOpen } = useContext(MenuContext);

  const handleNavbar = () => {
    setOpen();
  };

  return (
    <>
      <div className="flex items-center mt-4">
        <div className="gap-5 flex items-center  w-full justify-between">
          <div className="flex gap-5 items-center">
            <img src="/ico9.jpg" width={40} height={40} />
            <div className="text-2xl font-bold text-[#e5e5e5] cursor-pointer">
              satyam
            </div>
          </div>
          <ul className="hidden gap-4 links sm:flex list-none ">
            <li>
              <a href="/404">blog</a>
            </li>
            <li>
              <a href="mailto:shivsatyam86@gmail.com">contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div
        onClick={handleNavbar}
        className="hamburger flex-col gap-2 absolute top-7 right-10 flex sm:hidden cursor-pointer"
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
      {open && <BogusNavbar></BogusNavbar>}
    </>
  );
}
