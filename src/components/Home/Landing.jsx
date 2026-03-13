import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/all";
import React, { useRef, useState } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import { SplitText } from 'gsap/all';
import './landing.css';
import { useLoading } from '../../context/LoadingProvider';

gsap.registerPlugin(ScrollTrigger);

function Landing() {
  const locomotiveScroll = new LocomotiveScroll();

  const { isLoading } = useLoading();
  const tiltRef = useRef(null);
  const cursorRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);
    
  const mouseMoving = (e) => {
    const rect = tiltRef.current.getBoundingClientRect();
    setXVal((e.clientX - rect.x - rect.width / 2) / 70);
    setYVal(-(e.clientY - rect.y - rect.height / 2) / 20);
  };

  const handleMouseEnter = (text) => {
    gsap.to(cursorRef.current, {
      scale: 6, // Larger scale to fit text
      backgroundColor: "#ffffff",
      mixBlendMode: "normal",
      duration: 0.3
    });
    cursorRef.current.innerHTML = text;
  };

  const handleMouseLeave = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
      backgroundColor: "white",
      mixBlendMode: "difference",
      duration: 0.3
    });
    cursorRef.current.innerHTML = "";
  };

  useGSAP(() => {
    const moveCursor = (e) => {
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      });
    };
    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  useGSAP(
    function () {
      gsap.from(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 2,
        ease: 'elastic.inOut(1,0.1)',
      });
    },
    [xVal, yVal]
  );

  useGSAP(() => {
    const welcomeSplit = SplitText.create('.welcome', { type: 'chars' });

    const paragraphSplit = SplitText.create('.call-to-action-text h4', {
      type: 'words, lines',
      linesClass: 'paragraph-line',
    });

    const entryDelay = isLoading ? 4.8 : 0.1;
    const tl = gsap.timeline({ 
      delay: entryDelay ,
      onComplete: () => {
        ScrollTrigger.refresh(); // This tells all ScrollTriggers to re-calculate
      }
    });

    tl.from(
        welcomeSplit.chars,
        {
          opacity: 0,
          yPercent: 150,
          stagger: 0.05,
          ease: 'power2.out',
        },
        '-=0.5'
      )
      .to(
        '.hero-text-scroll',
        {
          duration: 1,
          clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
          ease: 'circ.out',
        },
        '-=0.5'
      )
      .from(
        '.text-1',
        {
          opacity: 0,
          xPercent: 60,
          yPercent: 50,
          duration: 1.5,
          ease: 'power2.out',
        },
        '<'
      )
      .from(
        '.text-2',
        {
          opacity: 0,
          xPercent: 60,
          yPercent: -50,
          duration: 1.5,
          ease: 'power2.out',
        },
        '<'
      )
      .from(
        '.text-3',
        {
          opacity: 0,
          xPercent: -60,
          yPercent: 50,
          duration: 1.5,
          ease: 'power2.out',
        },
        '<'
      )
      .from(
        '.call-to-action-button',
        {
          rotate: 6,
          ease: 'power1.inOut',
          duration: 1.5,
          opacity: 0,
        },
        'call-to-action'
      )
      .from(
        paragraphSplit.words,
        {
          yPercent: 300,
          rotate: 3,
          ease: 'power1.inOut',
          duration: 1,
          stagger: 0.01,
          opacity: 0,
        },
        'call-to-action'
      )
      .from('.scroll', {
        opacity: 0,
        delay: 0.5,
        yPercent: -40,
        ease: 'power1.inOut',
      });
  }, []);

  return (
    <>

      {/* Custom Cursor */}
        <div 
          ref={cursorRef}
          className="hidden md:block fixed top-0 left-0 w-4 h-4 bg-white rounded-full pointer-events-none z-[999] mix-blend-difference flex items-center justify-center text-[1.5px] text-black text-center font-bold uppercase p-1 leading-[1.2]"
          style={{ transform: 'translate(-50%, -50%)', whiteSpace: 'pre-wrap' }}
        ></div>

      <section
        id="landing"
        data-scroll
        data-scroll-speed="-.5"
        className={`h-screen relative bg-zinc-900`}
        onMouseMove={mouseMoving}
      >
        {/* Left Text Section */}
        <div className="absolute top-[10vh] md:top-[15vh] left-[5vw] flex gap-8 text-1">
          <svg
            className="o-ui-arrow w-8 h-8 md:w-16 md:h-16"
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

          <div className='text-[1.5vh] md:text-[1.2vw]'>
            <p className="font-[secondary] text-[#7e8279] uppercase">
              Things I <span className="font-[highlighted]">can</span> Help You With.
            </p>
            <h4 className="mt-6 font-[primary] text-[#7e8279]">WEB & MOBILE / UI & UX</h4>
            <h4 className="font-[primary] text-[#7e8279]">FRONT-END DEVELOPMENT</h4>
            <h4 className="font-[primary] text-[#7e8279]">FULL-STACK DEVELOPMENT</h4>
          </div>
        </div>

        {/* Right Top Links */}
        <div className="absolute flex items-center justify-center top-[30vh] right-[20vw] md:top-[20vh] md:right-[5vh] gap-4 text-[#7e8279] font-[secondary] text-3 z-[100]">
          <a 
            href="https://drive.google.com/file/d/12CkmPMnpCEk0O7HJ22qTG4sGhjRhWno5/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseEnter={() => handleMouseEnter("View\nResume")}
            onMouseLeave={handleMouseLeave}
            className="hover:text-white transition-colors cursor-pointer relative z-[98]"
          >
            📄My Resume 
          </a>
          <span className='text-2xl'>  |  </span>
          <a 
            href="https://codolio.com/profile/prakash_prasad22" 
            target="_blank" 
            rel="noopener noreferrer" 
            onMouseEnter={() => handleMouseEnter("View\nProfile")}
            onMouseLeave={handleMouseLeave}
            className="hover:text-white transition-colors cursor-pointer relative z-[110]"
          >
            📊 Codolio profile
          </a>
        </div>

        {/* Center Hero Section */}
        <div id="page-in" className="h-screen flex items-center justify-center flex-col">
          {/* Animated grid background */}
          <div className="grid-container absolute inset-0 w-full h-full" />

          <div
            id="tilt-text"
            ref={tiltRef}
            className="z-[9] top-[30vh] mx-4 md:mx-20 flex flex-col items-center"
          >
            <h1 className="text-[3vh] md:text-[5vw] leading-none font-[secondary] font-bold text-[#7e8279] overflow-hidden welcome">
              Hello 👋, I'm
            </h1>
            <h1
              className="bg-linear-to-br from-[#ea9130] to-[#28534f] text-[4vh] md:text-[6vw] leading-none font-[secondary] font-bold text-[white] rotate-[-3deg] hero-text-scroll"
              style={{
                clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
              }}
            >
              <span className="text-[3.5vh] md:text-[5vw] font-[primary] text-[#f2f2f2] px-2">
                PRAKASH PRASAD !
              </span>
            </h1>
          </div>

          {/* Call-to-action */}
          <div className="absolute mt-[30vh] md:mt-[40vh] text-[#7e8279] flex flex-col md:flex-row items-center justify-center md:justify-between gap-2 font-[secondary]">
            <div className="flex items-center justify-center gap-4 border border-[#7e8279] rounded-full px-2 py-1 md:px-4 md:py-2 call-to-action-button">
              <div className="border border-green-600 p-1 rounded-full">
                <div className="h-2 w-2 md:h-3 md:w-3 bg-green-600 rounded-[50%]" />
              </div>
              <div className='text-[1.5vh] md:text-[1vw]'>Open to work</div>
            </div>

            <div className="flex flex-col items-center md:items-start call-to-action-text text-[1.5vh] md:text-[1.2vw] mt-2">
              <h4 className='overflow-hidden'><b>Full Stack Developer Intern</b> @ <b>UiUx.Studio Pvt. Ltd.</b></h4>
              <h4 className='overflow-hidden mb-4'>MERN • Next.js • 500+ DSA Problems Solved</h4>

              <h4 className='overflow-hidden mb-4'>Actively seeking a <b>Full-Time SDE</b> role.</h4>

              <h4 className='overflow-hidden'>Feel free to explore my portfolio and reach out</h4>
              <h4 className='overflow-hidden'>-- I'd love to connect !!</h4>
            </div>
          </div>
        </div>

        {/* Bottom Left Text */}
        <div className="hidden md:block absolute left-[10vw] bottom-[12vh] md:bottom-[8vh] text-[#7e8279] text-[1.5vh] md:text-[1.2vw] font-[secondary] text-2">
          <h4>
            I <span className="font-[highlighted] text-[3vh]"> love </span> creating
          </h4>
          <h4>functional & visually pleasing</h4>
          <h4>interfaces for web & mobile.</h4>
        </div>

        {/* Bottom Right Scroll */}
        <div className="absolute right-[10vw] bottom-[8vh] flex flex-col gap-4 items-center justify-center scroll">
          <svg
            className="o-ui-arrow w-8 h-8  md:w-12 md:h-12 rotate-[45deg]"
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
          <h4 className="text-[#7e8279] text-[1.5vh] md:text-[1.2vw]">Scroll</h4>
        </div>
      </section>
    </>
  );
}

export default Landing;
