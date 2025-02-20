"use client";
import React, { useEffect, useState } from "react";
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation'; // Import navigation styles


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
  
 
  const sliderSettings = {
    slidesPerView: 1, // Default: 1 item for small screens
    spaceBetween: 10,
    loop: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    modules: [Navigation],
    navigation: true, // Enable navigation buttons
    breakpoints: {
      1024: {
        slidesPerView: 2, // 2 items in view for large screens
        spaceBetween: 20, // Adjust the space between items
        autoplay: false,
      },
      600: {
        slidesPerView: 1, // 1 item in view for smaller screens
        spaceBetween: 10,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
      },
    },
    onSwiper: (swiper:any) => {
      swiper.on('slideChange', () => {
        const totalSlides = swiper.slides.length - Math.floor(swiper.params.slidesPerView) + 1;
        const currentSlide = swiper.activeIndex + 1;
        const progressBarWidth = (currentSlide / totalSlides) * 100;
        setProgress(progressBarWidth);
      });
    },
  };
  
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
  ];

  // Toggle showAll state
  const handleToggle = () => setShowAll(!showAll);

  // Determine items to display
  const displayedItems = showAll ? items : items.slice(0, 6);

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

      
      
     <div id="container-project" className="project-slider-container">
      <h1 className="project-h1">Projects</h1>
      <div className="all-items">
      <Swiper {...sliderSettings}>
        {displayedItems.map((item) => (
          <SwiperSlide key={item.id} className="each-box">
            <img src={item.imgSrc} alt={item.title} />
            <h1>{item.title}</h1>
            <p>
              {expandedDescription === item.id
                ? item.description
                : item.description.length > 100
                ? item.description.slice(0, 50) + "..."
                : item.description}
            </p>
            {item.description.length > 100 && (
              <button
                className="read-more-less-btn"
                onClick={() => handleReadMoreToggle(item.id)}
              >
                {expandedDescription === item.id ? "Read Less" : "Read More"}
              </button>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      </div>

      {/* Navigation Buttons for Large Screens */}
      {/* <div className="swiper-button-next large-screen-only"></div>
      <div className="swiper-button-prev large-screen-only"></div> */}
      {/* Progress Bar */}
      <div style={{ width: "100%", height: "4px", backgroundColor: "gray", marginTop: "10px" }}>
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "white",
            transition: "width 0.3s ease-in-out",
          }}
        ></div>
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
