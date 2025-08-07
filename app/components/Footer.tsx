"use client";
import React from "react";

export default function Footer() {
  return (
    <>
      <div className="flex w-[100%] flex-wrap justify-between pb-10 text-[#e5e5e5] mt-40">
        <p>New Delhi, India 📍</p>
        <p
          className="underline underline-offset-2 cursor-pointer text-[#e5e5e5]"
          onClick={() => {
            window.location.href = "https://github.com/demss233/folio";
          }}
        >
          Source Code
        </p>
      </div>
    </>
  );
}
