import React from "react";
import { motion } from "framer-motion";

export default function BogusNavbar() {
  return (
    <>
      <motion.div
        variants={{
          open: {
            opacity: 0,
            transition: {
              type: "spring",
              damping: 300,
              duration: 0.4,
            },
          },
          close: {
            opacity: 1,
            transition: {
              type: "spring",
              duration: 0.3,
            },
          },
        }}
        className="bogus"
        initial="open"
        animate="close"
      >
        <ul className=" flex flex-col text-center gap-20 text-white font-semibold text-4xl items-center justify-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </motion.div>
    </>
  );
}
