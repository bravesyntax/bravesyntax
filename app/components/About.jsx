import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo">
        Introduction
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">
        About me
      </motion.h2>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.AboutImg}
            alt="userImage"
            className="w-full rounded-3xl"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex-1">
          <p className="mb-10 max-w-2xl font-Ovo">
            I am an experienced frontend Developer with over a decade of
            personal expertise in the field. throughout my career, I have had
            the privilege of collaborating with prestigious organizations,
            contributing to their success and growth.
          </p>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {infoList.map(({ icon, title, iconDark, description }, index) => {
              return (
                <li
                  key={index}
                  className="border-[.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 transition duration-500 hover:shadow-shadowBlack dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50">
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 mt-3"
                  />
                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>
                  <p className="text-gray-600 text-sm dark:text-white">
                    {description}
                  </p>
                </li>
              );
            })}
          </motion.ul>
          <div className="grid grid-cols-1 md:grid-cols-2 items-center">
            <div className="">
              <motion.h4
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.3, delay: 0.5 }}
                className="my-6 text-gray-700 font-Ovo dark:text-white">
                Social links
              </motion.h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="flex items-center gap-3 sm:gap-5">
                <li className="flex items-center justify-center hover:-translate-y-1 transition duration-500 cursor-pointer">
                  <a
                    href="https://github.com/bravesyntax"
                    target="_blank"
                    className="text-[18px] shadow-md p-2 rounded-sm hover:bg-black hover:text-white  border transition-all duration-500">
                    <FaGithub />
                  </a>
                </li>
                <li className="flex items-center justify-center hover:-translate-y-1 transition duration-500 cursor-pointer">
                  <a
                    href="https://www.linkedin.com/in/deepak-kumar890/"
                    target="_blank"
                    className="text-[18px]  shadow-md p-2 rounded-sm hover:bg-blue-500 hover:text-white border transition-all duration-500">
                    <CiLinkedin />
                  </a>
                </li>
                <li className="flex items-center justify-center hover:-translate-y-1 transition duration-500 cursor-pointer">
                  <a
                    href="https://mail.google.com/mail/u/0/#inbox?compose=DmwnWrRsqHQnQSZzTQGjwLpVWzJGtdWqfVwGMrFSqWWxVfhRXVWDbqdknCKgvhdNmptkmpFhwdrl"
                    target="_blank"
                    className="text-[18px] shadow-md p-2 border rounded-sm  transition-all duration-500 hover:text-white hover:bg-black">
                    <CiMail />
                  </a>
                </li>
              </motion.ul>
            </div>

            <div>
              <h4 className="my-6 text-gray-700 font-Ovo dark:text-white">
                Tools I use
              </h4>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
                className="flex items-center gap-3 sm:gap-5">
                {toolsData.map((item) => {
                  return (
                    <li
                      key={item.id}
                      className="flex items-center justify-center hover:-translate-y-1 transition duration-500 cursor-pointer">
                      <a href={item.link} target="_blank">
                        <Image
                          src={item.src}
                          alt="Tools"
                          className="w-5 sm:w-6"
                        />
                      </a>
                    </li>
                  );
                })}
              </motion.ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;
