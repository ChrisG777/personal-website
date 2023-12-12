import Hero from "../components/hero";
import React from "react";

export default function Home() {
  return (
    <main>
      <div>
        <Hero></Hero>
      </div>
      <section>
        {/* Start of new content section below the Hero component */}
        <div className="content-section">
          <div className="container text-white">
            <h2>Next Section Heading</h2>
            <p>
              This is the content that will appear below the Hero component.
            </p>
            {/* Add more content here as needed */}
          </div>
        </div>
      </section>
    </main>
  );
}
