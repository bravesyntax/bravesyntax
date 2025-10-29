import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets, servicesData } from "@/assets/assets";

const Services = () => {
  const professionalServices = [
    {
      id: 1,
      title: "Custom Web Development",
      description:
        "Enterprise-grade web applications built with React, Next.js, and modern frameworks. Scalable, secure, and performance-optimized solutions.",
      price: "₹40,000",
      priceNote: "Starting from",
      deliveryTime: "2-4 weeks",
      icon: "💻",
      color: "blue",
    },
    {
      id: 2,
      title: "WordPress Solutions",
      description:
        "Professional WordPress websites with custom themes, plugins, and full content management capabilities for businesses.",

      priceNote: "Starting from",
      deliveryTime: "1-3 weeks",
      icon: "🎨",
      color: "purple",
    },
    {
      id: 3,
      title: "Shopify E-commerce",
      description:
        "Complete e-commerce solutions with custom Shopify themes, payment integration, and conversion-focused design.",
      price: "₹35,000",
      priceNote: "Starting from",
      deliveryTime: "2-4 weeks",
      icon: "🛍️",
      color: "green",
    },
    {
      id: 4,
      title: "UI/UX Design",
      description:
        "Strategic interface design focused on user experience, conversion optimization, and brand consistency across platforms.",
      price: "₹25,000",
      priceNote: "Starting from",
      deliveryTime: "1-2 weeks",
      icon: "🎯",
      color: "pink",
    },
    {
      id: 5,
      title: "Brand Identity Design",
      description:
        "Comprehensive branding packages including logo design, brand guidelines, business collateral, and visual identity systems.",
      price: "₹35,000",
      priceNote: "Starting from",
      deliveryTime: "2-3 weeks",
      icon: "✨",
      color: "indigo",
    },
    {
      id: 6,
      title: "Product Catalogues & eBooks",
      description:
        "Professional print and digital catalogues with custom layouts, product photography integration, and brand-aligned design.",
      price: "₹20,000",
      priceNote: "Starting from",
      deliveryTime: "1-2 weeks",
      icon: "📚",
      color: "cyan",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[7%] py-20 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm uppercase tracking-wider mb-4 font-semibold text-gray-600 dark:text-gray-400">
          Professional Services
        </motion.h4>

        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-6xl font-Ovo mb-6 text-gray-900 dark:text-white">
          Elevate Your Digital Presence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          Delivering enterprise-quality web solutions, strategic design, and
          comprehensive digital services for ambitious businesses
        </motion.p>
      </div>

      {/* Current Role Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="max-w-6xl mx-auto mb-20">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-10 group-hover:opacity-20 transition duration-500"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-10 border border-gray-200 dark:border-gray-700">
            <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full uppercase tracking-wide">
                    Current Position
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
                <Image src={assets.subhot} width={80} alt="Subhot" />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center flex-shrink-0">
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
                    Building scalable applications with MedusaJS, Next.js &
                    React
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center flex-shrink-0">
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
                <div className="w-10 h-10 rounded-lg bg-pink-50 dark:bg-pink-900/20 flex items-center justify-center flex-shrink-0">
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

      {/* Core Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="max-w-7xl mx-auto mb-20">
        <h3 className="text-3xl md:text-4xl font-Ovo text-center mb-12 text-gray-900 dark:text-white">
          Core Services & Pricing
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {professionalServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="group relative">
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-8 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all h-full flex flex-col hover:shadow-xl">
                <div className="text-4xl mb-4">{service.icon}</div>

                <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {service.title}
                </h4>

                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6 flex-grow leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      {service.priceNote}
                    </div>
                    {/* <div className="text-3xl font-bold text-gray-900 dark:text-white">
                      {service.price}
                    </div> */}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>Delivery: {service.deliveryTime}</span>
                  </div>

                  <a
                    href="#contact"
                    className="w-full py-3 px-6 bg-gray-900 dark:bg-white text-white dark:text-gray-900 font-semibold rounded-xl hover:bg-gray-800 dark:hover:bg-gray-100 transition-all text-center block">
                    Request Quote
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Services from Data */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.5 }}
        className="max-w-7xl mx-auto mb-20">
        <h3 className="text-3xl md:text-4xl font-Ovo text-center mb-12 text-gray-900 dark:text-white">
          Technical Expertise
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              className="group relative bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg">
              <div className="w-16 h-16 mb-4">
                <Image
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-contain"
                />
              </div>

              <h4 className="font-Ovo font-semibold text-lg mb-2 text-gray-900 dark:text-white">
                {card.title}
              </h4>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                {card.description}
              </p>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors group">
                Learn More
                <Image
                  src={assets.right_arrow}
                  alt="Arrow"
                  className="w-4 opacity-70 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Timeline */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.8 }}
        className="max-w-5xl mx-auto mb-20">
        <h3 className="text-3xl font-Ovo text-center mb-12 text-gray-900 dark:text-white">
          Professional Experience
        </h3>

        <div className="space-y-8">
          <div className="relative pl-8 pb-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full -translate-x-[9px] ring-4 ring-white dark:ring-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
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
                <span className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 text-xs font-semibold rounded-full">
                  14 Months
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Specialized in Shopify theme customization and e-commerce
                development, enhancing user interfaces and optimizing conversion
                rates for multiple client projects.
              </p>
            </div>
          </div>

          <div className="relative pl-8 border-l-2 border-gray-200 dark:border-gray-700">
            <div className="absolute left-0 top-0 w-4 h-4 bg-green-600 rounded-full -translate-x-[9px] ring-4 ring-white dark:ring-gray-900"></div>
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
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
                <span className="px-3 py-1 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 text-xs font-semibold rounded-full">
                  16 Months
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Developed and maintained responsive WordPress websites with
                focus on performance optimization and cross-browser
                compatibility.
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="relative bg-gray-900 dark:bg-gray-800 rounded-2xl p-12 border border-gray-800 dark:border-gray-700">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Elevate Your Business?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project requirements and create a tailored
              solution that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-semibold hover:bg-gray-100 transition-all">
                Schedule Consultation
              </a>
              <a
                href="#work"
                className="px-8 py-4 bg-transparent text-white border-2 border-white rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all">
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
