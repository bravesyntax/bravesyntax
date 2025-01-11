import React, { useEffect, useState } from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [closeMenu, setCloseMenu] = useState("translate-x-[100%]");
  const [isScroll, setIsScroll] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  let lastScrollY = 0;

  function openMenu() {
    setCloseMenu("translate-x-[0%]");
  }

  function closeMenuMob() {
    setCloseMenu("translate-x-[100%]");
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScroll(currentScrollY > 50);

      if (currentScrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      lastScrollY = currentScrollY > 0 ? currentScrollY : 0;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 -right-30 w-11/12 -z-10 translate-y-[-80%] dark:hidden">
        <Image src={assets.header_bg_color} alt="BgImage" className="w-full" />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-2 flex items-center justify-between z-50 transition-transform duration-300 ${
          isScroll ? "bg-white bg-opacity-50 backdrop-blur-lg shadow-sm" : ""
        } ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } dark:bg-darkTheme dark:shadow-white/20`}>
        <a href="/">
          <Image
            src={isDarkMode ? assets.dark_logo : assets.logo}
            className="w-40 cursor-pointer mr-14 "
            alt="Logo"
          />
        </a>
        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll
              ? "bg-none "
              : "bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent"
          }`}>
          <li>
            <a href="#top" className="font-Ovo">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo">
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo">
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo">
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="Dark mode"
              className="w-6"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo ">
            Contact{" "}
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt="arrow"
            />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Hamburger menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile menu */}
        <ul
          className={`flex md:hidden flex-col gap-4 py-20 px-10 fixed ${closeMenu} top-0 right-0 bottom-0 w-1/2 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover`}>
          <div className="absolute right-6 top-10">
            <button className="" onClick={closeMenuMob}>
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="close menu"
                className="w-5 cursor-pointer"
              />
            </button>
          </div>

          <li>
            <a href="/" className="font-Ovo" onClick={closeMenuMob}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="font-Ovo" onClick={closeMenuMob}>
              About me
            </a>
          </li>
          <li>
            <a href="#services" className="font-Ovo" onClick={closeMenuMob}>
              Services
            </a>
          </li>
          <li>
            <a href="#work" className="font-Ovo" onClick={closeMenuMob}>
              My Work
            </a>
          </li>
          <li>
            <a href="#contact" className="font-Ovo" onClick={closeMenuMob}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
