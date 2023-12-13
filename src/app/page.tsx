import Hero from "../components/hero";
import Projects from "../components/projects";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <Hero></Hero>
      </div>
      <Projects></Projects>
      <div className="my-5">
        <h2>Some stuff below</h2>
      </div>
    </main>
  );
}
