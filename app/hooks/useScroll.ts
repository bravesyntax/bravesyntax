import { useState, useEffect, useRef } from "react";
import { UseScrollReturn } from "@/lib/types";

/**
 * Custom hook to detect scroll position and direction
 * Returns whether page is scrolled and whether navbar should be visible
 */
export const useScroll = (): UseScrollReturn => {
  const [isScroll, setIsScroll] = useState<boolean>(false);
  const [showNavbar, setShowNavbar] = useState<boolean>(true);
  const lastScrollY = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScroll(currentScrollY > 50);

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY.current = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return { isScroll, showNavbar };
};
