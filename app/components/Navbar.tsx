"use client";

import React, { useState } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { NavbarProps } from "@/lib/types";
import { useScroll } from "../hooks/useScroll";

const navLinks = [
  { href: "#top", label: "Home" },
  { href: "#about", label: "About me" },
  { href: "#services", label: "Services" },
  { href: "#work", label: "My Work" },
  { href: "#contact", label: "Contact me" },
] as const;

/**
 * Navigation bar component with responsive mobile menu and dark mode toggle
 */
const Navbar: React.FC<NavbarProps> = ({ isDarkMode, setIsDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const { isScroll, showNavbar } = useScroll();

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* Background decoration */}
      <div className="fixed -right-30 top-0 -z-10 w-11/12 translate-y-[-80%] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="Background decoration"
          className="w-full"
          priority
        />
      </div>

      <nav
        className={`fixed z-50 flex w-full items-center justify-between px-5 py-2 transition-transform duration-300 lg:px-8 xl:px-[8%] ${
          isScroll
            ? "bg-white bg-opacity-50 shadow-sm backdrop-blur-lg"
            : ""
        } ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        } dark:bg-darkTheme dark:shadow-white/20`}
        role="navigation"
        aria-label="Main navigation"
      >
        <a href="/" aria-label="Home">
          <Image
            src={isDarkMode ? assets.dark_logo : assets.logo}
            className="mr-14 w-40 cursor-pointer"
            alt="Brave Syntax Logo"
            priority
          />
        </a>

        {/* Desktop Navigation */}
        <ul
          className={`hidden items-center gap-6 rounded-full px-12 py-3 md:flex lg:gap-8 ${
            isScroll
              ? "bg-none "
              : "bg-white bg-opacity-50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          }`}
        >
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-Ovo transition-colors hover:text-gray-600 dark:hover:text-gray-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Navigation Actions */}
        <div className="flex items-center gap-4">
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setIsDarkMode((prev) => !prev)}
            aria-label={
              isDarkMode ? "Switch to light mode" : "Switch to dark mode"
            }
            className="transition-transform hover:scale-110"
          >
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt={isDarkMode ? "Light mode" : "Dark mode"}
              className="w-6"
            />
          </button>

          {/* Contact Button (Desktop) */}
          <a
            href="#contact"
            className="ml-4 hidden items-center gap-3 rounded-full border border-gray-500 px-10 py-2.5 font-Ovo transition-all hover:bg-gray-100 dark:hover:bg-gray-800 lg:flex"
          >
            Contact
            <Image
              src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
              className="w-3"
              alt=""
            />
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className="ml-3 block md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="Menu"
              className="w-6"
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          className={`fixed bottom-0 right-0 top-0 z-50 flex h-screen w-1/2 flex-col gap-4 bg-rose-50 px-10 py-20 transition duration-500 dark:bg-darkHover md:hidden ${
            isMobileMenuOpen ? "translate-x-[0%]" : "translate-x-[100%]"
          }`}
          role="menu"
        >
          <div className="absolute right-6 top-10">
            <button
              onClick={closeMobileMenu}
              aria-label="Close mobile menu"
            >
              <Image
                src={isDarkMode ? assets.close_white : assets.close_black}
                alt="Close"
                className="w-5 cursor-pointer"
              />
            </button>
          </div>

          {navLinks.map((link) => (
            <li key={link.href} role="menuitem">
              <a
                href={link.href}
                className="font-Ovo transition-colors hover:text-gray-600 dark:hover:text-gray-300"
                onClick={closeMobileMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
