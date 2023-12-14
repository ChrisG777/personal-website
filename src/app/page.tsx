import Hero from "../components/hero";
import Projects from "../components/projects";
import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "@/components/AboutMe";

/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </main>
  );
}
