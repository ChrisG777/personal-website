import Hero from "../components/hero";
import Projects from "../components/projects";
import React from "react";
import Navbar from "../components/Navbar";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <AboutMe></AboutMe>
      <Projects></Projects>

      <div className="my-5">
        <h2>Some stuff below</h2>
      </div>
    </main>
  );
}
