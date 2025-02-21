"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import './globals.css'


export default function Home() {
  const [animateAbout, setAnimateAbout] = useState(false);
  const [animateProject, setAnimateProject] = useState(false);

  const [progress, setProgress] = useState(0); 

  // const handleSlideChange = (swiper:any) => {
  //   const totalSlides = swiper.slides.length;
  //   const currentIndex = swiper.activeIndex;
  //   const newProgress = ((currentIndex + 1) / totalSlides) * 100;
  //   setProgress(newProgress);
  // };
  
  
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
  
  const cards = [
    { id: 1, image: "images/img-1.jpg", name: "James Wilson", profession: "Software Developer" },
    { id: 2, image: "images/img-2.jpg", name: "Sarah Johnson", profession: "Graphic Designer" },
    { id: 3, image: "images/img-3.jpg", name: "Michael Brown", profession: "Project Manager" },
    { id: 4, image: "images/img-4.jpg", name: "Emily Davis", profession: "Marketing Specialist" },
    { id: 5, image: "images/img-5.jpg", name: "Christopher Garcia", profession: "Data Scientist" },
    { id: 6, image: "images/img-6.jpg", name: "Richard Wilson", profession: "Product Designer" },
  ];
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
            <button>Projects</button>
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

      
      
      <div className="swiper">
      <div className="slider-wrapper">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          loop={true}
          grabCursor={true}
        pagination={{ clickable: true, dynamicBullets: true, renderBullet: (index, className) => `<span class='${className}' style='background-color: white;'></span>` }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="card-list swiper-wrapper"
      >
        {cards.map((card) => (
          <SwiperSlide key={card.id} className="card-item swiper-slide">
            <img src={card.image} alt={card.name} className="user-image" />
            <h2 className="user-name">{card.name}</h2>
            <p className="user-profession">{card.profession}</p>
            <button className="message-button">Message</button>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-pagination"></div>
      <div className="swiper-slide-button swiper-button-prev"></div>
      <div className="swiper-slide-button swiper-button-next"></div>
    </div>
  </div>
     
     <div id="container-skill">
      <div className="banner">
      <div className="slider" style={{ ['--quantity' as any]: 10 }}>
        <div className="items" style={{ ['--position' as any]: 1 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 2 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 3 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 4 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 5 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 6 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 7 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 8 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 9 }}>
          <img src="./picture.png" alt="" />
        </div>
        <div className="items" style={{ ['--position' as any]: 10 }}>
          <img src="./picture.png" alt="" />
        </div>
      </div>
      </div>
    </div>

    </div>
  );
}
