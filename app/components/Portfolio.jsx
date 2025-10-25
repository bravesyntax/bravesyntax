import React from "react";
import PortfolioCard from "./PortfolioCard";
import { sliderData } from "@/assets/assets";
import { motion } from "motion/react";
import Link from "next/link";

const Portfolio = () => {
  const featuredProjects = [
    {
      name: "BraveSyntax Portfolio",
      description:
        "Modern personal portfolio showcasing smooth animations and contemporary design patterns",
      tech: ["React.js", "Next.js", "Framer Motion", "Tailwind CSS"],
      category: "Web Application",
      year: "2025",
      status: "Live",
      color: "blue",
      link: "https://bravesyntax-p9y8.vercel.app/",
    },
    {
      name: "Louis Faglin Paris",
      description:
        "Luxury e-commerce platform with advanced wishlist functionality and dynamic product displays",
      tech: ["Shopify", "Liquid", "JavaScript", "Custom CSS"],
      category: "E-commerce",
      year: "2024",
      status: "Production",
      color: "purple",
      link: "https://jp.louisfaglin.com/en/collections/jewelry-for-men",
    },
    {
      name: "SEPL Catalogue",
      description:
        "Comprehensive design system with detailed product catalogues and brand consistency of SUBHOT.",
      tech: ["Figma", "UI/UX", "Design System"],
      category: "Design",
      year: "2025",
      status: "Completed",
      color: "pink",
      link: "https://www.figma.com/design/siHgt3GAjB6j7Qd3suxOaS/Product-template?node-id=0-1&t=XzMph460Rjxorh4y-1",
    },
    {
      name: "Ticket Generator",
      description:
        "Interactive web tool with dynamic form handling and real-time ticket preview functionality",
      tech: ["HTML5", "CSS3", "JavaScript", "Canvas API"],
      category: "Web Tool",
      year: "2024",
      status: "Completed",
      color: "green",
      link: "https://bravesyntax.github.io/ticketGenerator/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[7%] py-20 scroll-mt-20 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-20">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm uppercase tracking-wider mb-3 font-semibold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
          Portfolio Showcase
        </motion.h4>
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-5xl md:text-6xl font-Ovo mb-6 text-gray-900 dark:text-white">
          Selected Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto">
          A curated collection of projects demonstrating expertise in modern web
          development, e-commerce solutions, and user-centered design
        </motion.p>
      </div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="max-w-7xl mx-auto mb-24">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Featured Projects
          </h3>
          <Link
            href="#projects"
            className="hidden sm:block text-sm text-gray-500 dark:text-gray-400">
            Scroll to explore →
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.15 }}
              className="group relative">
              {/* Hover Glow Effect */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r from-${project.color}-600 to-${project.color}-400 rounded-3xl blur-xl opacity-0 group-hover:opacity-30 transition duration-500`}></div>

              <div className="relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-transparent transition-all">
                {/* Project Header */}
                <div className="p-8 pb-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <span
                          className={`px-3 py-1 bg-${project.color}-100 dark:bg-${project.color}-900/30 text-${project.color}-700 dark:text-${project.color}-400 text-xs font-bold rounded-full uppercase tracking-wide`}>
                          {project.category}
                        </span>
                        <span className="text-gray-400 text-sm">
                          • {project.year}
                        </span>
                      </div>
                      <h4 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                        {project.name}
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                        {project.description}
                      </p>
                    </div>
                    <div></div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mt-6">
                    {project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Status Footer */}
                <div className="px-8 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {project.status}
                    </span>
                  </div>
                  <Link
                    href={project.link}
                    target="_blank"
                    className="text-blue-600 dark:text-blue-400 text-sm font-semibold hover:gap-2 flex items-center gap-1 transition-all group/btn">
                    View Project
                    <svg
                      className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform"
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
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* All Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.1 }}
        id="projects"
        className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            All Projects
          </h3>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>{sliderData.length} Projects</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sliderData.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 2.3 + index * 0.1 }}>
              <PortfolioCard data={card} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.5 }}
        className="max-w-5xl mx-auto mb-20">
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-xl opacity-20"></div>
          <div className="relative bg-white dark:bg-gray-900 rounded-3xl p-10 border border-gray-200 dark:border-gray-700">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-900 dark:text-white">
              Technologies & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "React.js",
                "Next.js",
                "JavaScript",
                "TypeScript",
                "Tailwind CSS",
                "Framer Motion",
                "Shopify",
                "WordPress",
                "MedusaJS",
                "HTML5",
                "CSS3",
                "Node.js",
                "Git",
                "Figma",
                "Photoshop",
              ].map((tech, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 2.7 + index * 0.05 }}
                  className="px-5 py-2.5 bg-gradient-to-r from-gray-100 to-gray-50 dark:from-gray-800 dark:to-gray-900 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:scale-105 transition-all shadow-sm hover:shadow-md">
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.9 }}
        className="max-w-4xl mx-auto text-center">
        <div className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>
          <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 dark:from-gray-800 dark:via-gray-900 dark:to-black rounded-3xl p-16 shadow-2xl">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Amazing
              </h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Have a project in mind? I'm currently available for freelance
                work and exciting opportunities. Let's turn your vision into
                reality.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="group/btn px-10 py-5 bg-white text-gray-900 rounded-full font-bold shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3">
                  Start a Project
                  <svg
                    className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform"
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
                  href="/Resume.pdf"
                  download
                  className="px-10 py-5 bg-transparent text-white border-2 border-white rounded-full font-bold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-3">
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
