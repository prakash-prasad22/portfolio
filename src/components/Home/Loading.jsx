import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useLoading } from "../../context/LoadingProvider";

const Loading = () => {
  const containerRef = useRef(null);
  const { setIsLoading } = useLoading();

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        setIsLoading(false); // Unmounts the loader and shows the app
      },
    });

    tl.to('.loading-box', {
      scale: 0,
      y: 60,
      rotate: 400,
      duration: 0.8,
      repeat: 1,
    //   yoyo: true,
      stagger: {
        amount: 1.1,
        from: 'end',
      },
    })
    .to(containerRef.current, {
      opacity: 0,
      duration: 0.5,
      ease: 'power2.inOut',
    });
  }, { scope: containerRef });

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-zinc-900 overflow-hidden"
    >
      <div className="flex flex-col gap-2 -rotate-45">
        <div className="flex gap-2">
          <div className="loading-box w-6 h-6 bg-linear-to-tr from-[#3b9778] to-[#ea9130]" />
          <div className="loading-box w-6 h-6 bg-linear-to-bl from-[#ea9130] to-[#f05e27]" />
          <div className="loading-box w-6 h-6 bg-linear-to-br from-[#ea9130] to-[#f05e27]" />
        </div>
        <div className="flex gap-2">
          <div className="loading-box w-6 h-6 bg-linear-to-br from-[#3b9778] to-[#28534f]" />
          <div className="loading-box w-6 h-6 bg-linear-to-bl from-[#ea9130] to-[#3b9778]" />
          <div className="loading-box w-6 h-6 bg-linear-to-br from-[#ea9130] to-[#f05e27]" />
        </div>
        <div className="flex gap-2">
          <div className="loading-box w-6 h-6 bg-linear-to-br from-[#3b9778] to-[#28534f]" />
          <div className="loading-box w-6 h-6 bg-linear-to-br from-[#3b9778] to-[#28534f]" />
          <div className="loading-box w-6 h-6 bg-linear-to-bl from-[#ea9130] to-[#28534f]" />
        </div>
      </div>
    </div>
  );
};

export default Loading;