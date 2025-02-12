"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link"; 
import "./globals.css";
import ParticlesBackground from "./component/ParticlesBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Home");

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const handleMenuClick = (menu: string, url: string) => {
    setActiveMenu(menu);
    setMenuOpen(false);
    window.location.href = url; // Forces a full page refresh
  };

  // Track scroll position to change active menu
  useEffect(() => {
    const sections = [
      { id: "container-home", name: "Home" },
      { id: "container-about", name: "About" },
      { id: "education", name: "Education" },
      { id: "project", name: "Project" },
      { id: "contact", name: "Contact" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust for better accuracy (add an offset)

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveMenu(section.name);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        {/* Full-screen particles background */}
        <ParticlesBackground />

        <header>
          <div id="menubar">
            <div id="name">
              <Link href="/" onClick={() => handleMenuClick("Home", "/")}>On <span style={{color:"yellow"}}>Chhunlin</span></Link>
            </div>
            <div id="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <div id="menus" className={menuOpen ? "mobile" : ""}>
              <Link
                href="/"
                onClick={() => handleMenuClick("Home", "/")}
                className={activeMenu === "Home" ? "active" : ""}
              >
                Home
              </Link>
              <Link
                href="#container-about"
                onClick={() => handleMenuClick("About", "#container-about")}
                className={activeMenu === "About" ? "active" : ""}
              >
                About
              </Link>
              <Link
                href="#container-skill"
                onClick={() => handleMenuClick("Education", "#container-skill")}
                className={activeMenu === "Education" ? "active" : ""}
              >
                Education
              </Link>
              <Link
                href="#project"
                onClick={() => handleMenuClick("Project", "#project")}
                className={activeMenu === "Project" ? "active" : ""}
              >
                Project
              </Link>
              <Link
                href="#contact"
                onClick={() => handleMenuClick("Contact", "#contact")}
                className={activeMenu === "Contact" ? "active" : ""}
              >
                Contact
              </Link>
            </div>
          </div>
        </header>

        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
