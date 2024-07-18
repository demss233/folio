import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import SectionLayout from "./components/SectionLayout";
import Experience from "./components/Experience";
import Misc from "./components/Misc";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";

export default function App() {
  return (
    <>
      <Navbar></Navbar>
      <SectionLayout>
        <Hero></Hero>
        <Tech></Tech>
        <Experience></Experience>
        <Misc></Misc>
        <Hobbies></Hobbies>
        <Footer></Footer>
      </SectionLayout>
    </>
  );
}
