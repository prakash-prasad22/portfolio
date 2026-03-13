import React, { useRef, useState } from 'react'
import { motion, useAnimation } from 'framer-motion';
import LocomotiveScroll from 'locomotive-scroll';
import QuickBuy from "../../assets/otherImg/QuickBuy.webp"
import Medicare from "../../assets/otherImg/Medicare.webp"
import Spylt from "../../assets/otherImg/Spylt.webp"
import BookBazar from "../../assets/otherImg/BookBazar.webp"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useNavigate } from 'react-router-dom';

function FeaturedProjects() {

  const locomotiveScroll = new LocomotiveScroll();
  const navigate = useNavigate();

  const cursorRef = useRef(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const cards = [useAnimation(), useAnimation(), useAnimation(), useAnimation()];

  const projectData = [
  { 
    title: "QuickBuy", 
    img: QuickBuy, 
    tech: ["React", "Node.js", "MongoDB", "Redux Toolkit", "Stripe"], 
    link: "https://quickbuy-frontend-5j1i.onrender.com/",
    desc: "A dual-delivery MERN marketplace featuring 'Instant' and 'Standard' fulfillment flows with integrated Stripe payments." 
  },
  { 
    title: "MediCare", 
    img: Medicare, 
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT"], 
    link: "https://zeecare-medical-frontend.onrender.com/",
    desc: "A comprehensive healthcare portal with role-based dashboards, secure JWT authentication, and a doctor rating system." 
  },
  { 
    title: "BookBazaar", 
    img: BookBazar, 
    tech: ["Kotlin", "Firebase", "XML", "Android Studio"], 
    link: "https://github.com/prakash-prasad22/BookBazaar",
    desc: "A peer-to-peer marketplace for university students to buy and sell second-hand books using real-time database services." 
  },
  { 
    title: "Spylt", 
    img: Spylt, 
    tech: ["React.js", "GSAP", "Tailwind CSS"], 
    link: "https://gsap-awwwards.onrender.com",
    desc: "A high-fidelity frontend landing page for the Spylt energy drink, featuring advanced GSAP scroll animations and modern UI design." 
  }
];

  useGSAP(() => {
    // Initialize cursor as invisible/scaled down
    gsap.set(cursorRef.current, { scale: 0, opacity: 0 });

    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
    cards[index].start({ y: "0%" });
    
    gsap.to(cursorRef.current, {
      scale: 6,
      opacity: 1,
      backgroundColor: "#ffffff",
      mixBlendMode: "normal",
      duration: 0.3
    });
    cursorRef.current.innerHTML = "View Project";
  };

  const handleMouseLeave = (index) => {
    setHoveredIndex(null);
    cards[index].start({ y: "100%" });

    gsap.to(cursorRef.current, {
      scale: 0,
      opacity: 0,
      backgroundColor: "white",
      mixBlendMode: "difference",
      duration: 0.3
    });
    cursorRef.current.innerHTML = "";
  };
  return (
    <div id='feat-projects' className='relative bg-[#f2f2f2] h-[200dvh] md:h-[160dvh] w-screen'>
      <div 
        ref={cursorRef}
        className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[999] flex items-center justify-center text-[2px] text-black text-center font-bold uppercase p-1 leading-[1.2]"
        style={{ transform: 'translate(-50%, -50%)', whiteSpace: 'pre-wrap' }}
      ></div>

      <div className='absolute w-full px-4 md:px-12 py-6'>
        <div className='flex flex-col items-center gap-4 md:flex-row justify-between mb-12'>
          <h1 className='font-[primary] text-[6.5vh] md:text-[9vh] font-bold text-zinc-700'>
            Feat Wo<span className='text-[#28534f] font-[highlighted]'>r</span>ks
          </h1>

          <svg
            className="w-8 h-8 md:w-16 md:h-16 transform rotate-45 md:rotate-90"
            viewBox="0 0 64 64"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.10162 3.10156L62.9999 62.9999"
              stroke="gray"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M63 1.00001L63 63L0.999989 63"
              stroke="gray"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="flex flex-wrap gap-y-8 md:gap-y-12">
          {projectData.map((project, index) => (
            <div key={index} className="w-full md:w-1/2 md:px-4">
              <motion.div
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                onClick={() => window.open(project.link, "_blank", "noopener,noreferrer")}
                className="cardcontainer relative w-full h-[75vw] md:h-[55vh] cursor-pointer"
              >
                {/* SPLIT TEXT OVERLAY */}
                <div className='hidden md:block'>
                  <h1 className={`absolute flex overflow-hidden text-zinc-900 font-semibold text-7xl z-[100] leading-none tracking-tighter uppercase top-1/2 transform -translate-y-1/2 
                    ${index % 2 === 0 ? 'left-full -translate-x-1/2' : 'right-full translate-x-1/2'}`}
                  >
                    {project.title.split("").map((item, i) => (
                      <motion.span
                        key={i}
                        initial={{ y: "100%" }}
                        animate={cards[index]}
                        transition={{ ease: [0.22, 1, 0.36, 1], delay: i * 0.04 }}
                        className='inline-block'
                      >
                        {item}
                      </motion.span>
                    ))}
                  </h1>
                </div>

                {/* TECH & DESC INFO */}
                <div className="absolute inset-0 z-50 p-2 flex flex-col justify-end pointer-events-none">
                   <div className="flex gap-2 mb-3 flex-wrap">
                      {project.tech.map(t => (
                        <motion.span 
                          key={t}
                          animate={{ opacity: hoveredIndex === index ? 1 : 0, y: hoveredIndex === index ? 0 : 10 }}
                          className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 rounded-full text-[10px] text-white font-bold uppercase tracking-widest"
                        >
                          {t}
                        </motion.span>
                      ))}
                   </div>
                   <motion.p 
                     animate={{ opacity: hoveredIndex === index ? 1 : 0, x: hoveredIndex === index ? 0 : -10 }}
                     className="text-white text-base font-medium leading-tight max-w-[300px]"
                   >
                     {project.desc}
                   </motion.p>
                </div>

                {/* PROJECT IMAGE CARD - Restored Expansion */}
                <motion.div
                  animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                  transition={{ ease: [0.4, 0, 0.2, 1], duration: 0.5 }}
                  className="card w-full h-full rounded-2xl overflow-hidden bg-zinc-200"
                >
                  <div className={`absolute inset-0 z-40 transition-colors duration-500 ${hoveredIndex === index ? 'bg-black/60' : 'bg-transparent'}`} />
                  <img 
                    src={project.img} 
                    alt={project.title} 
                    className="w-full h-full bg-cover" 
                  />
                </motion.div>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="w-full flex items-center mt-10 p-5">
            <button 
              className="flex gap-10 items-center bg-zinc-900 text-white text-2xl px-10 py-2 rounded-full cursor-pointer"
              onClick={() => navigate("/Projects")}
            >
              <div>See All Projects</div>
              <div className="w-3 h-3 bg-white rounded-full"></div>
            </button>
          </div>
      </div>
    </div>
  )
}

export default FeaturedProjects
