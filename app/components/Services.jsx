import React from "react";
import { servicesData } from "@/assets/assets";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[7%] py-10 scroll-mt-20">
      <motion.h4
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center mb-2 text-lg font-Ovo">
        What I offer
      </motion.h4>
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="text-center text-5xl font-Ovo">
        My Services
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        Front-end Developer skilled in HTML, CSS, JavaScript, and React, with
        expertise in responsive design, plugin customization, and converting
        Figma/PSD to code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="w-[100%] max-w-[90%] m-auto grid gap-4 pb-16 
        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {servicesData.map((card, index) => (
          <ServiceCard key={index} data={card} />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
