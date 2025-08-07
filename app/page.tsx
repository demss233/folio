import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Tech from "./components/Tech";
import SectionLayout from "./components/SectionLayout";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Links from "./components/Links";

export default function App() {
  return (
    <>
      <SectionLayout>
        <Navbar></Navbar>
        <Hero></Hero>
        <Tech></Tech>
        <Experience></Experience>
        <Links></Links>
        <Footer></Footer>
      </SectionLayout>
    </>
  );
}
