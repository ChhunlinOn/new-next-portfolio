"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import "./globals.css";
import ParticlesBackground from "./component/ParticlesBackground";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string>("Home");

  const router = useRouter();
  const pathname = usePathname();

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleMenuClick = (menu: string, url: string) => {
    setActiveMenu(menu);
    setMenuOpen(false);

    if (url === "/") {
      window.location.href = url; // Full page reload when clicking "Home"
    } else if (url.startsWith("#")) {
      scrollToSection(url.substring(1)); // Remove "#" and scroll smoothly
    } else {
      router.push(url); // Navigate to other pages without refresh
    }
  };

  useEffect(() => {
    const sections = [
      { id: "container-home", name: "Home" },
      { id: "container-about", name: "About" },
      { id: "container-skill", name: "Education" },
      { id: "project", name: "Project" },
      { id: "contact", name: "Contact" },
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100; // Adjust offset for better accuracy

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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body>
        <ParticlesBackground />

        <header>
          <div id="menubar">
            <div id="name">
              <Link href="/" onClick={(e) => { e.preventDefault(); handleMenuClick("Home", "/"); }}>
                On <span style={{ color: "yellow" }}>Chhunlin</span>
              </Link>
            </div>
            <div id="hamburger" onClick={toggleMenu}>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <nav id="menus" className={menuOpen ? "mobile" : ""}>
              <Link href="/" onClick={(e) => { e.preventDefault(); handleMenuClick("Home", "/"); }} className={activeMenu === "Home" ? "active" : ""}>
                Home
              </Link>
              <Link href="#container-about" onClick={(e) => { e.preventDefault(); handleMenuClick("About", "#container-about"); }} className={activeMenu === "About" ? "active" : ""}>
                About
              </Link>
              <Link href="#container-project" onClick={(e) => { e.preventDefault(); handleMenuClick("Project", "#container-project"); }} className={activeMenu === "Project" ? "active" : ""}>
                Project
              </Link>
              <Link href="#project" onClick={(e) => { e.preventDefault(); handleMenuClick("Education", "#project"); }} className={activeMenu === "Education" ? "active" : ""}>
                Skill
              </Link>
              <Link href="#contact" onClick={(e) => { e.preventDefault(); handleMenuClick("Contact", "#contact"); }} className={activeMenu === "Contact" ? "active" : ""}>
                Contact
              </Link>
            </nav>
          </div>
        </header>

        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
