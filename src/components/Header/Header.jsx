import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { validURLConvert } from '../../utils/validURLConvert';
import logo from "../../assets/otherImg/Logo-removebg-preview.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
  const linksRef = useRef([]);

  // GSAP Animation for the Mobile Menu
  useGSAP(() => {
    if (open) {
      // Open Menu Animation
      gsap.to(menuRef.current, {
        clipPath: "circle(141.4% at 100% 0%)", // High-end reveal effect
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, stagger: 0.1, ease: "back.out(1.7)", delay: 0.3 }
      );
    } else {
      // Close Menu Animation
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [open]);

  const navItems = ["About Me", "Skills", "Projects", "Services", "Blogs"];

  return (
    <>
      {/* DESKTOP NAV (Hidden on Mobile) */}
      <nav className='hidden md:block fixed z-[99] w-[70vw] mx-[15vw] border border-[#7e8279] mt-6 rounded-lg backdrop-blur-3xl'>
        <div className='flex px-4 items-center justify-between'>
          <Link to={"/"}>
            <img src={logo} alt="Logo" className='w-[12vw] h-[8vh]' />
          </Link>
          <div className="flex gap-2">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={validURLConvert(item)}
                className="text-[#7e8279] text-md p-4 font-[primary] font-bold hover:text-[#28534f] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* MOBILE HEADER BAR */}
      <div className="md:hidden fixed top-0 w-full z-[100] flex justify-between items-center px-6 py-2 backdrop-blur-md border-b border-white/10">
        <Link to={"/"} onClick={() => setOpen(false)}>
          <img src={logo} alt="Logo" className='w-[30vw] h-auto' />
        </Link>
        
        {/* HAMBURGER / CROSS BUTTON */}
        <button 
          onClick={() => setOpen(!open)}
          className="relative z-[101] w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
        >
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-[8px]" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`w-6 h-[2px] bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-[8px]" : ""}`} />
        </button>
      </div>

      {/* MOBILE FULLSCREEN MENU */}
      <div 
        ref={menuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }}
        className="md:hidden fixed inset-0 z-[99] bg-[#253b39] flex flex-col items-center justify-center"
      >
        <div className="flex flex-col items-center gap-8">
          {navItems.map((item, index) => (
            <Link
              key={index}
              ref={(el) => (linksRef.current[index] = el)}
              to={validURLConvert(item)}
              onClick={() => setOpen(false)}
              className="text-white text-4xl font-[primary] font-bold tracking-tighter uppercase"
            >
              {item}
            </Link>
          ))}
          {/* Contact Button in Mobile Menu */}
          {/*<button 
            ref={(el) => (linksRef.current[navItems.length] = el)}
            className="mt-4 px-8 py-3 bg-white text-[#253b39] font-bold rounded-full uppercase tracking-widest text-sm"
          >
            Contact Me
          </button> */}
        </div>
      </div>
    </>
  );
}

export default Header;