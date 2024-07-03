import React, { useEffect } from "react";

export const ScrolleBar = () => {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      let currentScroll = window.scrollY || document.documentElement.scrollTop;
      const navStyle = document.getElementById("style");
      if (navStyle) {
        if (currentScroll > lastScrollTop) {
          // Scroll down
          navStyle.style.top = "-50px";
        } else {
          // Scroll up
          navStyle.style.top = "0px";
        }
        lastScrollTop = currentScroll;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return <></>;
};
