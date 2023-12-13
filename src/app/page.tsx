import Hero from "../components/hero";
import Projects from "../components/projects";
import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <Hero></Hero>
      <Projects></Projects>

      <div className="my-5">
        <h2>Some stuff below</h2>
      </div>
    </main>
  );
}
