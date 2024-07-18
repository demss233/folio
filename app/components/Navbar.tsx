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
      <div className="flex items-center justify-between ">
        <div className="gap-5 flex items-baseline">
          <div className="text-3xl font-bold text-white cursor-pointer">
            ss.
          </div>
          <ul className="hidden gap-4 links sm:flex list-none">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/404">Blog</a>
            </li>
            <li>
              <a href="mailto:shivsatyam86@gmail.com">Contact</a>
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
