import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useState(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    isVisible && (
      <div className="fixed bottom-10 right-10 z-50">
        <button
          onClick={scrollToTop}
          className="relative flex items-center justify-center group w-[60px] h-[60px] rounded-full  p-[2px] cursor-pointer transition-all duration-300 ease-in-out transform group-hover:scale-110 animate-bounce"
        >
          <div className="absolute inset-0 w-[60px] h-[60px] rounded-full bg-gradient-to-r from-blue-700 to-cyan-700 opacity-70 blur-xl group-hover:blur-2xl group-hover:opacity-100 transition-all duration-500"></div>

          <div className="relative z-10 flex items-center justify-center w-full h-full bg-primary rounded-full shadow-lg">
            <FaArrowUp className="text-white text-[24px]" />
          </div>
        </button>
      </div>
    )
  );
};

export default ScrollToTop;
