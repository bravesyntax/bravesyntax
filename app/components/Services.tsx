"use client";

import React from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { assets, servicesData } from "@/assets/assets";
import { ProfessionalService } from "@/lib/types";

const professionalServices: ProfessionalService[] = [
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

/**
 * Services section showcasing professional offerings and experience
 */
const Services: React.FC = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="relative scroll-mt-20 overflow-hidden px-[7%] py-20"
      aria-labelledby="services-heading"
    >
      <div className="absolute left-0 top-0 -z-10 h-96 w-96 rounded-full bg-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 -z-10 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl"></div>

      {/* Header Section */}
      <div className="mx-auto mb-20 max-w-4xl text-center">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400"
        >
          Professional Services
        </motion.h4>

        <motion.h2
          id="services-heading"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-5xl font-Ovo text-gray-900 dark:text-white md:text-6xl"
        >
          Elevate Your Digital Presence
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          Delivering enterprise-quality web solutions, strategic design, and
          comprehensive digital services for ambitious businesses
        </motion.p>
      </div>

      {/* Current Role Highlight */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.7 }}
        className="mx-auto mb-20 max-w-6xl"
      >
        <div className="group relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 opacity-10 blur transition duration-500 group-hover:opacity-20"></div>
          <div className="relative rounded-2xl border border-gray-200 bg-white p-8 dark:border-gray-700 dark:bg-gray-900 md:p-10">
            <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
              <div>
                <div className="mb-2 flex items-center gap-3">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-700 dark:bg-green-900/30 dark:text-green-400">
                    Current Position
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    April 2025 - Present
                  </span>
                </div>
                <h3 className="mb-2 text-2xl font-bold text-gray-900 dark:text-white md:text-3xl">
                  Designer (Frontend Developer)
                </h3>
                <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                  Subhot Enterprises Private Limited
                </p>
              </div>
              <div className="hidden md:block">
                <Image src={assets.subhot} width={80} alt="Subhot" />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
                  color: "blue",
                  title: "E-commerce Development",
                  description:
                    "Building scalable applications with MedusaJS, Next.js & React",
                },
                {
                  icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
                  color: "purple",
                  title: "UI/UX Enhancement",
                  description:
                    "Data-driven improvements based on user analytics",
                },
                {
                  icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                  color: "pink",
                  title: "Graphic Design",
                  description: "Social media graphics with Canva & Photoshop",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-${item.color}-50 dark:bg-${item.color}-900/20`}
                  >
                    <svg
                      className={`h-5 w-5 text-${item.color}-600 dark:text-${item.color}-400`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={item.icon}
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="mb-1 font-semibold text-gray-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Core Services Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mx-auto mb-20 max-w-7xl"
      >
        <h3 className="mb-12 text-center text-3xl font-Ovo text-gray-900 dark:text-white md:text-4xl">
          Core Services & Pricing
        </h3>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {professionalServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
              className="group relative"
            >
              <div className="relative flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-8 transition-all hover:border-gray-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600">
                <div className="mb-4 text-4xl">{service.icon}</div>

                <h4 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h4>

                <p className="mb-6 flex-grow text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                  {service.description}
                </p>

                <div className="space-y-4 border-t border-gray-200 pt-4 dark:border-gray-700">
                  <div>
                    <div className="mb-1 text-xs text-gray-500 dark:text-gray-400">
                      {service.priceNote}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
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
                    className="block w-full rounded-xl bg-gray-900 px-6 py-3 text-center font-semibold text-white transition-all hover:bg-gray-800 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100"
                  >
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
        className="mx-auto mb-20 max-w-7xl"
      >
        <h3 className="mb-12 text-center text-3xl font-Ovo text-gray-900 dark:text-white md:text-4xl">
          Technical Expertise
        </h3>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicesData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.6 + index * 0.1 }}
              className="group relative rounded-xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-lg dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600"
            >
              <div className="mb-4 h-16 w-16">
                <Image
                  src={card.src}
                  alt={card.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <h4 className="mb-2 font-Ovo text-lg font-semibold text-gray-900 dark:text-white">
                {card.title}
              </h4>

              <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                {card.description}
              </p>

              <a
                href="#contact"
                className="group inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                Learn More
                <Image
                  src={assets.right_arrow}
                  alt=""
                  className="w-4 opacity-70 transition-all group-hover:translate-x-1 group-hover:opacity-100"
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
        className="mx-auto mb-20 max-w-5xl"
      >
        <h3 className="mb-12 text-center text-3xl font-Ovo text-gray-900 dark:text-white">
          Professional Experience
        </h3>

        <div className="space-y-8">
          <div className="relative border-l-2 border-gray-200 pb-8 pl-8 dark:border-gray-700">
            <div className="absolute left-0 top-0 -translate-x-[9px] rounded-full bg-blue-600 ring-4 ring-white dark:ring-gray-900 h-4 w-4"></div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    Feb 2024 - Mar 2025
                  </span>
                  <h4 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
                    Frontend Developer
                  </h4>
                  <p className="font-medium text-gray-600 dark:text-gray-400">
                    Digicloud Freelancers Private Limited
                  </p>
                </div>
                <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-900/20 dark:text-blue-400">
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

          <div className="relative border-l-2 border-gray-200 pl-8 dark:border-gray-700">
            <div className="absolute left-0 top-0 -translate-x-[9px] rounded-full bg-green-600 ring-4 ring-white dark:ring-gray-900 h-4 w-4"></div>
            <div className="rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800">
              <div className="mb-3 flex flex-wrap items-start justify-between gap-2">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-wide text-green-600 dark:text-green-400">
                    Oct 2022 - Jan 2024
                  </span>
                  <h4 className="mt-1 text-xl font-bold text-gray-900 dark:text-white">
                    WordPress Developer
                  </h4>
                  <p className="font-medium text-gray-600 dark:text-gray-400">
                    Aarsun Woods Private Limited
                  </p>
                </div>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700 dark:bg-green-900/20 dark:text-green-400">
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
        className="mx-auto max-w-4xl text-center"
      >
        <div className="relative">
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900 p-12 dark:border-gray-700 dark:bg-gray-800">
            <h3 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Elevate Your Business?
            </h3>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-300">
              Let's discuss your project requirements and create a tailored
              solution that drives results
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="rounded-full bg-white px-8 py-4 font-semibold text-gray-900 transition-all hover:bg-gray-100"
              >
                Schedule Consultation
              </a>
              <a
                href="#work"
                className="rounded-full border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-gray-900"
              >
                View Portfolio
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Services;
