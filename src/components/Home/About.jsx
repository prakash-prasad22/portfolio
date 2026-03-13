import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Marquee from "react-fast-marquee";
import LocomotiveScroll from "locomotive-scroll";
import SplitText from "gsap/SplitText";

import MERN from "../../assets/Mern-Stack-removebg-preview.png";
import DSA from "../../assets/DSA-removebg-preview.png";
import android from "../../assets/Android-removebg-preview.png";
import { useLoading } from "../../context/LoadingProvider";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const { isLoading } = useLoading();
  const lineRef = useRef(null);
  const dotRef = useRef(null);
  const containerRef = useRef(null);

  const navigate = useNavigate();

  useGSAP(() => {
    if (isLoading) return;

    const paragraphSplit = SplitText.create(".message-content p", {
      type: "words, lines",
      linesClass: "paragraph-line",
    });

    const textSplit = SplitText.create(".text-highlight", { type: "chars" });
    const textSplit2 = SplitText.create(".text-highlight-2", { type: "chars" });
    const textSplit3 = SplitText.create(".text-highlight-3", { type: "chars" });
    const textSplit4 = SplitText.create(".text-highlight-4", { type: "chars" });

    gsap.from(paragraphSplit.words, {
      yPercent: 300,
      rotate: 3,
      ease: "power1.inOut",
      duration: 1,
      stagger: 0.01,
      scrollTrigger: {
        trigger: ".message-content p",
        top: "top 50%",
        end: "top 20%",
        scrub: 1.2,
      },
    });

    [textSplit, textSplit2, textSplit3, textSplit4].forEach((split, i) => {
      gsap.from(split.chars, {
        yPercent: 50,
        rotate: 3,
        opacity: 0,
        stagger: 0.04,
        ease: "power2.out",
        duration: 0.5,
        scrollTrigger: {
          trigger: `.text-highlight${i === 0 ? "" : `-${i + 1}`}`,
          top: "top 50%",
          end: "top 20%",
          scrub: 0.7,
        },
      });
    });

    gsap.fromTo(
      lineRef.current,
      { height: "0%" },
      {
        height: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1.2,
        },
      }
    );

    gsap.fromTo(
      dotRef.current,
      { top: "0%" },
      {
        top: "100%",
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom 80%",
          scrub: 1.2,
        },
      }
    );

    gsap.utils.toArray(".timeline-item").forEach((item) => {
      gsap.from(item, {
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: item,
          start: "top 80%",
          end: "bottom 80%",
          scrub : 1.2,
        },
      });
    });
  },[isLoading]);

  const timelineData = [
    // { 
    //   year: "2018", 
    //   role: "Class 10th", 
    //   company: "Vivekananda Kendra Vidyalaya", 
    //   desc: "Achieved 95.20% in AISSCE. Built a strong analytical foundation." 
    // },
    { 
      year: "2020", 
      role: "Class 12th (Science)", 
      company: "Delhi Public School", 
      desc: "Completed SSCE with 90.60%, achieving 95/100 in Mathematics (Batch Highest)." 
    },
    { 
      year: "2024", 
      role: "B.Tech in Computer Engineering", 
      company: "IKGPTU, Jalandhar", 
      desc: "Graduated with 7.98/10 CGPA. Gained core proficiency in OOPS, Operating Systems, Computer Networks, and DBMS." 
    },
    { 
      year: "2025", 
      role: "Full Stack AI Certification", 
      company: "AlmaBetter", 
      desc: "Completed intensive certification in Full Stack Web Development with AI, mastering modern system design and scalable web architectures." 
    },
    { 
      year: "NOW", 
      role: "Full Stack Dev Intern", 
      company: "UiUx.Studio Pvt. Ltd.", 
      desc: "Optimized legacy API endpoints and engineered social media feed systems handling 100K+ records with sub-second latency." 
    },
  ];

  return (
    <div id="about" className="h-[380vh] md:h-[250vh] lg:h-[260vh] bg-white w-full">
      <div className="relative bg-zinc-900 max-h-[120vh]">
        {/* Heading Marquee */}
        <div className="py-[7.5vw] md:py-[7.5vh] bg-[#28534f] rounded-tl-4xl overflow-hidden">
          <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-6 whitespace-nowrap">
            <Marquee speed={100}>
              <h1 className="text-[7.5vh] md:text-[7.5vw] leading-none font-[primary] font-semibold text-white pl-20 animate-marquee">
                About Myself
              </h1>
              <h1 className="text-[7.5vh] md:text-[7.5vw] leading-none font-[primary] font-semibold text-white pl-20 animate-marquee">
                About Myself
              </h1>
            </Marquee>
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col p-8 gap-1 mt-8 md:mt-20">
          {/* Section 1 */}
          <div className="flex flex-col md:flex-row gap-4 md:gap-1">
            <div className="w-full md:w-1/2 text-white pr-4 -mt-12 -pl-8">
              <p className="font-[primary] text-[4vw] md:text-[3vh] leading-[3vh]">
                Fueled by a{" "}
                <span className="font-[highlighted] text-[#28534f] text-[6vw] md:text-[5vh]">
                  passion
                </span>{" "}
                for crafting seamless digital experiences, I&apos;ve embarked on
                a journey to build innovative and impactful solutions and it has
                been a{" "}
                <span className="font-[highlighted] text-[#28534f] text-[6vw] md:text-[4vh]">
                  continuous process of learning and growth.
                </span>
              </p>
              <div className="block text-[2vh] text-white mt-8 mb-8 list-disc list-inside message-content overflow-hidden">
                <p>Discovering the Possibilities ...</p>
                <p>
                  Eager to contribute skills and enthusiasm to a collaborative
                  team.
                </p>
                <p>
                  Driven to learn more from experienced and grow through
                  mentorships.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 bg-linear-to-br from-[#ea9130] to-[#f05e27] p-[1.5rem]">
              <h1 className="text-white font-[primary] text-[4vh]">MERN-Stack</h1>
              <img src={MERN} alt="MERN stack" />
              <ul className="block text-[2vh] text-white mt-8 mb-8 list-disc list-inside">
                <li>
                  Deployed{" "}
                  <span className="text-highlight overflow-hidden text-[3vh]">
                    4+
                  </span>{" "}
                  MERN-based applications.
                </li>
                <li>
                  Hands-on experience with both front-end and back-end
                  development.
                </li>
                <li className="hidden md:block">
                  Continuously{" "}
                  <span className="text-highlight-2 overflow-hidden text-[2.5vh]">
                    building
                  </span>{" "}
                  projects to refine my full-stack skills.
                </li>
              </ul>
            </div>
          </div>

          {/* Section 2 */}
          <div className="flex flex-col md:flex-row gap-1">
            <div className="w-full md:w-1/2 bg-linear-to-br from-[#ea9130] to-[#f05e27] p-[1.5rem]">
              <h1 className="hidden md:block text-white font-[primary] text-[4vh]">
                DSA
              </h1>
              <img
                src={DSA}
                alt="DSA"
                className="w-full h-[15vh] object-scale-down"
              />
              <ul className="block text-[2vh] text-white mt-8 mb-8 list-disc list-inside">
                <li>
                  Solved over{" "}
                  <span className="text-highlight-3 overflow-hidden text-[3vh]">
                    600+
                  </span>{" "}
                  problems on LeetCode and GeeksforGeeks.
                </li>
                <li className="hidden md:block">Cultivated a structured approach to algorithmic thinking.</li>
                <li className="hidden md:block">Dedicated to building efficient and logical solutions.</li>
              </ul>
            </div>

            <div className="w-full md:w-1/2 bg-linear-to-br from-[#3b9778] to-[#28534f] p-[1.5rem]">
              <h1 className="hidden md:block text-white font-[primary] text-[4vh]">
                Native-Android
              </h1>
              <img
                src={android}
                alt="Android"
                className="w-full h-[15vh] object-scale-down"
              />
              <ul className="block text-[2vh] text-white mt-8 mb-8 list-disc list-inside">
                <li>Explored native Android development with Kotlin.</li>
                <li>
                  Actively exploring cutting-edge technologies like{" "}
                  <span className="text-highlight-4 overflow-hidden text-[2.5vh]">
                    Next.js , Cloud , AI/ML
                  </span>
                </li>
                <li className="hidden md:block">
                  Committed to broadening my technical horizon and staying
                  adaptable.
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="timeline-container relative w-full mt-8 px-10">
        <h2 className="text-[10vw] md:text-[60px] text-center font-normal mb-12 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent">
          My education <span className="font-serif italic text-zinc-400">&</span> experience
        </h2>

        {/* The relative container for the timeline */}
        <div ref={containerRef} className="relative max-w-5xl mx-auto">
          
          {/* THE CENTER LINE */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2">
            {/* The Green Progress Line */}
            <div 
              ref={lineRef} 
              className="absolute top-0 left-0 w-full bg-linear-to-b from-white to-[#3b9778] shadow-[0_0_10px_#3b9778]"
            />
            {/* The Glowing Dot */}
            <div 
              ref={dotRef} 
              className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-[#ea9130] rounded-full shadow-[0_0_20px_#ea9130] z-10"
            />
          </div>

          {timelineData.map((item, index) => (
            <div key={index} className="timeline-item flex w-full mb-20 items-center">
              
              {/* LEFT SIDE: Year & Role */}
              <div className="w-[45%] flex flex-col md:flex-row items-center justify-between md:justify-end gap-1 md:gap-6 text-right">
                <div>
                  <h4 className="text-2xl md:text-3xl font-semibold text-[#ea9130] leading-tight">
                    {item.role}
                  </h4>
                  <h5 className="text-[#3b9778] text-2xl font-medium">{item.company}</h5>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-bold text-zinc-800 tracking-tighter">
                  {item.year}
                </h3>
              </div>

              {/* GAP FOR CENTER LINE (10%) */}
              <div className="w-[10%]" />

              {/* RIGHT SIDE: Description */}
              <div className="w-[45%] text-zinc-500 font-light text-lg">
                <p className="max-w-xs">{item.desc}</p>
              </div>

            </div>
          ))}
        </div>
      </div>

        {/* Button */}
        <div id="button" className="flex justify-center mt-2 mb-44">
          <button 
            className="flex gap-10 items-center bg-zinc-900 text-white text-2xl px-10 py-2 rounded-full mb-10 cursor-pointer"
            onClick={() => navigate("/About-Me")}
          >
            Know More About Me
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
