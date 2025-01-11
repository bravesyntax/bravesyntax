import React from "react";
import PortfolioCard from "./PortfolioCard";
import { sliderData } from "@/assets/assets";
import { motion } from "motion/react";
const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full max-w-[90%] mx-auto py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">
        My Latest Work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Welcome to my web development portfolio! Explore a collection of
        projects showcasing my expertise in Front End Development.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="w-[100%] max-w-[90%] m-auto grid gap-3 pb-16
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {sliderData.map((card) => (
          <PortfolioCard key={card.id} data={card} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
