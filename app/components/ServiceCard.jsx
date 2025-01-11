import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const ServiceCard = (props) => {
  let cardData = props.data;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="cursor-pointer hover:bg-[#f5f5f571] hover:-translate-y-1 transition duration-500 hover:shadow-lg rounded-lg border backdrop-blur-sm dark:hover:bg-transparent dark:hover:shadow-darkHover dark:hover:shadow-sm dark:hover:border-[1px] dark:hover:border-[#ffffff70] ">
      <div className="flex flex-col items-start justify-center p-8">
        <div className="w-20 h-20 mb-6 ">
          <Image src={cardData.src} alt="service card" className="w-16" />
        </div>

        <div className="mb-4">
          <h2 className="font-Ovo font-semibold uppercase mb-3 dark:text-white">
            {cardData.title}
          </h2>
          <p className="text-sm font-md text-slate-500 mb-3 dark:text-white">
            {cardData.description}
          </p>
        </div>
        <a
          href="https://github.com/bravesyntax"
          target="_blank"
          className=" flex items-center gap-3 hover:gap-4 transition-all duration-500 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-[#f5f5f5b2]">
          Read More{" "}
          <Image src={assets.right_arrow} alt="Right Arrow" className="w-5" />
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
