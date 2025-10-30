"use client";

import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin, CiMail } from "react-icons/ci";
import { motion } from "motion/react";
import { AboutProps } from "@/lib/types";

const socialLinks = [
  {
    href: "https://github.com/bravesyntax",
    icon: FaGithub,
    label: "GitHub",
    hoverClass: "hover:bg-black hover:text-white",
  },
  {
    href: "https://www.linkedin.com/in/deepak-kumar890/",
    icon: CiLinkedin,
    label: "LinkedIn",
    hoverClass: "hover:bg-blue-500 hover:text-white",
  },
  {
    href: "mailto:bravesyntax@gmail.com",
    icon: CiMail,
    label: "Email",
    hoverClass: "hover:bg-black hover:text-white",
  },
] as const;

/**
 * About section component showcasing personal information, skills, and social links
 */
const About: React.FC<AboutProps> = ({ isDarkMode }) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
      className="scroll-mt-20 px-[12%] py-10"
      aria-labelledby="about-heading"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-2 text-center text-lg font-Ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        id="about-heading"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        About me
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="my-20 flex w-full flex-col items-center gap-20 lg:flex-row"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 max-w-none rounded-3xl sm:w-80"
        >
          <Image
            src={assets.AboutImg}
            alt="Deepak Kumar"
            className="w-full rounded-3xl"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1"
        >
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced frontend Developer with over a decade of
            personal expertise in the field. Throughout my career, I have had
            the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-3"
          >
            {infoList.map(({ icon, title, iconDark, description }, index) => (
              <li
                key={index}
                className="cursor-pointer rounded-xl border-[.5px] border-gray-400 p-6 transition duration-500 hover:-translate-y-1 hover:bg-lightHover hover:shadow-shadowBlack dark:border-white dark:hover:bg-darkHover/50 dark:hover:shadow-white"
              >
                <Image
                  src={isDarkMode ? iconDark : icon}
                  alt=""
                  className="mt-3 w-7"
                />
                <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                  {title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-white">
                  {description}
                </p>
              </li>
            ))}
          </motion.ul>

          <div className="grid grid-cols-1 items-center md:grid-cols-2">
            <div>
              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.5 }}
                className="my-6 font-Ovo text-gray-700 dark:text-white"
              >
                Social links
              </motion.h4>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex items-center gap-3 sm:gap-5"
              >
                {socialLinks.map((social) => (
                  <li
                    key={social.label}
                    className="flex cursor-pointer items-center justify-center transition duration-500 hover:-translate-y-1"
                  >
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`border p-2 text-[18px] shadow-md transition-all duration-500 ${social.hoverClass}`}
                    >
                      <social.icon />
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>

            <div>
              <h4 className="my-6 font-Ovo text-gray-700 dark:text-white">
                Tools I use
              </h4>

              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center gap-3 sm:gap-5"
              >
                {toolsData.map((item) => (
                  <li
                    key={item.id}
                    className="flex cursor-pointer items-center justify-center transition duration-500 hover:-translate-y-1"
                  >
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Visit ${item.link}`}
                    >
                      <Image
                        src={item.src}
                        alt=""
                        className="w-5 sm:w-6"
                      />
                    </a>
                  </li>
                ))}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default About;
