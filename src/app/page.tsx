"use client";
import React, { useEffect, useState } from "react";
import "./globals.css"; // Ensure correct path

export default function Home() {
  const [animateAbout, setAnimateAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("container-about");
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        // Check if the section is in view (with some buffer for scroll position)
        if (rect.top < window.innerHeight * 0.3) {
          // Add delay before triggering animation
          setTimeout(() => setAnimateAbout(true), 500); // 500ms delay when entering
        } else {
          // Add delay before resetting animation
          setTimeout(() => setAnimateAbout(false), 500); // 500ms delay when leaving
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="text">
      <div id="container-home" className="block">
        <div id="Profile">
          <img src="null" alt="" />
        </div>
        <div id="intro">
          <h1>Hi! I'm <span className="text-ani" style={{color:"yellow"}}>Chhunlin</span></h1>
          <p>I'm a Full Stack Dev</p>
          <div className="button">
            <button>Hire Me</button>
            <button>My Project</button>
          </div>
        </div>
      </div>

      <div
        className={`block1 ${animateAbout ? "centered-left" : ""}`}
        id="container-about"
      >
        <div className="info">
          <h1><span>About</span> Me</h1>
          <p><span>Name:</span> On Chhunlin</p>
          <p><span>Date of birth:</span> 26, September, 2007</p>
          <p><span>Address:</span> Phnom Penh city, Cambodia.</p>
          <p><span>Email:</span> chhunlin.on@institute.pse.ngo</p>
          <p><span>Phone:</span> +855 979033023</p>
          <p><span>20</span> Complete projects</p>
          <a href="path/to/yourfile.pdf" download>
            <button>Download my CV</button>
          </a>
        </div>
        <div className="proflie-about">
          <img src="./6a0de2691bb0b536e0f0273adcdb0678.png" alt="" />
        </div>
      </div>

      <div id="container-project">

      </div>
    </div>
  );
}
