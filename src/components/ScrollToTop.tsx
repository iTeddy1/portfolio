import { useState } from "react";
import { useTheme } from "./theme-provider";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);
  const { theme } = useTheme();

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-4 z-50 rounded-full bg-bgDark p-2 shadow-md dark:bg-bgLight"
      style={{ display: visible ? "inline" : "none" }}
      aria-labelledby="scroll-to-top"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-arrow-narrow-up"
        width="28"
        height="28"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke={`${theme === "dark" ? "#323434" : "#E1E3DB"}`}
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M12 5l0 14" />
        <path d="M16 9l-4 -4" />
        <path d="M8 9l4 -4" />
      </svg>
    </button>
  );
};

export default ScrollToTop;
