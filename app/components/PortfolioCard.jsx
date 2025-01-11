import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";
const PortfolioCard = (props) => {
  const { data } = props;

  return (
    <div className="relative block rounded-sm shadow-sm dark:bg-[#ffffff1d]">
      <Image
        src={data.src}
        alt={data.title}
        className="w-full h-[320px] object-cover rounded-sm"
      />

      <div className="p-4">
        <p className="font-sans text-lg mb-4 text-slate-600">
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            href={data.link}
            target="_blank"
            className=" flex items-center gap-3 hover:gap-4 transition-all duration-500 text-gray-500 hover:text-gray-900 dark:text-white dark:hover:text-[#f5f5f5b2]">
            {data.title}
            <Image src={assets.right_arrow} alt="Right Arrow" className="w-5" />
          </motion.a>
        </p>
        <p className=" font-sm font-Ovo">{data.description}</p>
      </div>
    </div>
  );
};

export default PortfolioCard;
