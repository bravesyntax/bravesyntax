import React from "react";
import { assets, servicesData } from "@/assets/assets";
import ServiceCard from "./ServiceCard";
import { motion } from "motion/react";
import Image from "next/image";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[7%] py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      {/* Header Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm uppercase tracking-wider mb-3 font-medium bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          What I Offer
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-6xl font-Ovo mb-6 text-gray-900 dark:text-white">
          Premium Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Delivering exceptional web solutions with cutting-edge technologies
          and meticulous attention to detail
        </motion.p>
      </div>

      {/* Current Role Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-6xl mx-auto mb-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-40 transition duration-500"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 shadow-sm">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                    CURRENT POSITION
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    April 2025 - Present
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  Designer (Frontend Developer)
                </h3>
                <p className="text-lg text-blue-600 dark:text-blue-400 font-medium">
                  Subhot Enterprises Private Limited
                </p>
              </div>
              <div className="hidden md:block">
                <Image src={assets.subhot} width={80} />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-blue-600 dark:text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    E-commerce Development
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Building scalable apps with MedusaJS, Next.js & React
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-purple-600 dark:text-purple-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    UI/UX Enhancement
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Data-driven improvements based on user analytics
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-pink-100 dark:bg-pink-900/30 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-pink-600 dark:text-pink-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Graphic Design
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Social media graphics with Canva & Photoshop
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}>
              <ServiceCard data={card} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="max-w-5xl mx-auto mb-20">
        <h3 className="text-3xl font-Ovo text-center mb-12 text-gray-900 dark:text-white">
          Professional Journey
        </h3>
        <div className="space-y-6">
          {/* Timeline Item 1 */}
          <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full -translate-x-[9px] ring-4 ring-white dark:ring-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wide">
                    Feb 2024 - Mar 2025
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                    Frontend Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Digicloud Freelancers Private Limited
                  </p>
                </div>
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                  14 Months
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>
                    Customized Shopify themes to meet specific client
                    requirements and brand guidelines
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 mt-1">→</span>
                  <span>
                    Enhanced user interfaces resulting in improved user
                    experience and engagement metrics
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute left-0 top-0 w-4 h-4 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full -translate-x-[9px] ring-4 ring-white dark:ring-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700">
              <div className="flex items-start justify-between mb-3 flex-wrap gap-2">
                <div>
                  <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                    Oct 2022 - Jan 2024
                  </span>
                  <h4 className="text-xl font-bold text-gray-900 dark:text-white mt-1">
                    WordPress Developer
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 font-medium">
                    Aarsun Woods Private Limited
                  </p>
                </div>
                <span className="px-3 py-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  16 Months
                </span>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">→</span>
                  <span>
                    Created and maintained WordPress websites with user-friendly
                    interfaces
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 mt-1">→</span>
                  <span>
                    Ensured responsiveness and high performance across all
                    devices and browsers
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.9 }}
        className="max-w-4xl mx-auto text-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's collaborate to create exceptional digital experiences that
              drive results and exceed expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="group px-8 py-4 bg-white text-gray-900 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2">
                Let's Talk
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
              <a
                href="#work"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2">
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
