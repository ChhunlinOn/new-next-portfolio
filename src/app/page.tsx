"use client";
// import ParticlesBackground from "./component/ParticlesBackground";
import React, { useEffect, useState } from "react";
import "./globals.css"; // Make sure the path is correct
const intro = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies, neque nec aliquet commodo, libero lectus scelerisque metus, vel tincidunt orci turpis ut justo. Praesent volutpat, elit at feugiat tincidunt, nisi justo varius erat, nec pellentesque tortor libero sed dolor. Phasellus fermentum metus id mi venenatis, eu suscipit ligula tempus.";

export default function Home() {

  const [hasScrolled, setHasScrolled] = useState(false); // Track if scroll has passed a certain point
  const [scrollDirection, setScrollDirection] = useState(""); // Track scroll direction (left/right)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Get the current scroll position

      // Update the scroll direction and trigger animation based on scroll position
      if (scrollPosition > 200) {
        setHasScrolled(true);
        setScrollDirection(scrollPosition > 0 ? "from-left" : "from-right");
      } else {
        setHasScrolled(false); // Reset if user scrolls back up
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div id="text">
      {/* <ParticlesBackground /> */}
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
      className={`block1 ${hasScrolled ? (scrollDirection === "from-left" ? "centered-left" : "") : ""}`}
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
    </div>
  );
}
