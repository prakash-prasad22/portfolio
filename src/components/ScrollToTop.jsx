import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // 1. Reset standard browser scroll
    window.scrollTo(0, 0);
    
    // 2. Optional: If Locomotive is acting up, you can target the wrapper
    // document.querySelector('[data-scroll-container]').scrollTop = 0;
  }, [pathname]);

  return null;
};

export default ScrollToTop;