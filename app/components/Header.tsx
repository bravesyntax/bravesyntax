"use client";

import Image from "next/image";
import React from "react";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";

/**
 * Hero section component with animated introduction
 */
const Header: React.FC = () => {
  return (
    <header className="mx-auto flex h-screen w-11/12 max-w-3xl flex-col items-center justify-center gap-4 pt-24 text-center lg:pt-24">
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      >
        <Image
          src={assets.userImg}
          alt="Deepak Kumar - Frontend Developer"
          className="h-32 w-32 rounded-full bg-rose-50 object-cover object-right-top"
          priority
        />
      </motion.div>

      <motion.h3
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mb-3 flex items-end gap-2 text-xl font-Ovo md:text-2xl"
      >
        Hi! I'm Deepak kumar
        <Image src={assets.hand_icon} alt="Wave" className="w-6" />
      </motion.h3>

      <motion.h1
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-3xl font-Ovo sm:text-6xl lg:text-[66px]"
      >
        Frontend web developer based in india
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mx-auto max-w-2xl font-Ovo"
      >
        Turning ideas into interactive realities. Highly energetic and driven by
        a love for user experience design, intuitive interfaces, and web
        development.
      </motion.p>

      <div className="mt-4 flex flex-col items-center gap-4 sm:flex-row">
        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          href="#contact"
          className="flex items-center gap-2 rounded-full border border-white bg-black px-10 py-3 text-white transition-all hover:bg-gray-800 dark:bg-transparent dark:hover:bg-gray-900"
        >
          Contact me
          <Image
            src={assets.right_arrow_white}
            alt=""
            className="w-4"
          />
        </motion.a>

        <motion.a
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          href="/Resume.pdf"
          download
          className="flex items-center gap-2 rounded-full border border-gray-500 bg-white px-10 py-3 transition-all hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800"
        >
          My Resume
          <Image src={assets.download_icon} alt="" className="w-4" />
        </motion.a>
      </div>
    </header>
  );
};

export default Header;
