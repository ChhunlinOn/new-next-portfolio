"use client";
import React, { useEffect, useState } from "react";
import "./globals.css"; // Ensure correct path

export default function Home() {
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateProject, setAnimateProject] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutSection = document.getElementById("container-about");
      const projectSection = document.getElementById("container-project");

      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3) {
          setTimeout(() => setAnimateAbout(true), 500);
        } else {
          setTimeout(() => setAnimateAbout(false), 500);
        }
      }

      if (projectSection) {
        const rect = projectSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.3) {
          setTimeout(() => setAnimateProject(true), 500);
        } else {
          setTimeout(() => setAnimateProject(false), 500);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [showAll, setShowAll] = useState(false);

  // Sample items array - replace with your actual data
  const items = [
    { id: 1, title: "Payment", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.", imgSrc: "./picture.png" },
    { id: 2, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 3, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 4, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 5, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 6, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 7, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 8, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 9, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" },
    { id: 10, title: "Payment", description: "jkdjdjkksjdh", imgSrc: "./picture.png" }
  ];

  // Toggle showAll state
  const handleToggle = () => setShowAll(!showAll);

  // Determine items to display
  const displayedItems = showAll ? items : items.slice(0, 3);

  const [expandedDescription, setExpandedDescription] = useState<number | null>(null); // Track which item's description is expanded

  const handleReadMoreToggle = (id: number) => {
    if (expandedDescription === id) {
      setExpandedDescription(null); // Collapse description
    } else {
      setExpandedDescription(id); // Expand description
    }
  };
  return (
    <div id="text">
      <div id="container-home" className="block">
        <div id="Profile">
          <img src="null" alt="" />
        </div>
        <div id="intro">
          <h1>Hi! I'm <span className="text-ani" style={{ color: "yellow" }}>Chhunlin</span></h1>
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

      <div id="container-project" className={`block1 ${animateProject ? "centered-left" : ""}`}>
        <div className="all-items">
      {displayedItems.map((item) => (
        <div key={item.id} className="each-box">
          <img src={item.imgSrc} alt="" />
          <h1>{item.title}</h1>
          <p>
              {expandedDescription === item.id
                ? item.description
                : item.description.length > 100
                ? item.description.slice(0, 50) + '...'
                : item.description}
            </p>
            {item.description.length > 100 && (
              <button
                className="read-more-less-btn"
                onClick={() => handleReadMoreToggle(item.id)}
              >
                {expandedDescription === item.id ? 'Read Less' : 'Read More'}
              </button>
            )}
        </div>
      ))}
      </div>
      <button className="show-button" onClick={handleToggle}>
        {showAll ? "Show Less" : "Show More"}
      </button>
      </div>

    </div>
  );
}
