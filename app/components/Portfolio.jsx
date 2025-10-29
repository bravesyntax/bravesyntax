import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { sliderData, assets } from "@/assets/assets";

// Skeleton Component
const ProjectSkeleton = () => (
  <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden animate-pulse">
    <div className="relative h-64 bg-gray-200 dark:bg-gray-800"></div>
    <div className="p-6">
      <div className="h-6 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-24"></div>
    </div>
  </div>
);

const FeaturedSkeleton = () => (
  <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 animate-pulse">
    <div className="p-6">
      <div className="flex items-center gap-3 mb-3">
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-full"></div>
        <div className="h-4 w-16 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
      <div className="h-7 bg-gray-200 dark:bg-gray-800 rounded w-3/4 mb-3"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-full mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-5/6 mb-4"></div>
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="h-6 w-16 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
        <div className="h-6 w-20 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
        <div className="h-6 w-24 bg-gray-200 dark:bg-gray-800 rounded-lg"></div>
      </div>
    </div>
    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between">
        <div className="h-4 w-20 bg-gray-200 dark:bg-gray-800 rounded"></div>
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-800 rounded"></div>
      </div>
    </div>
  </div>
);

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const featuredProjects = [
    {
      id: 1,
      name: "BraveSyntax Portfolio",
      description:
        "Modern personal portfolio showcasing smooth animations and contemporary design patterns",
      tech: ["React.js", "Next.js", "Framer Motion", "Tailwind CSS"],
      category: "Web Application",
      year: "2025",
      status: "Live",
      link: "https://bravesyntax.vercel.app/",
    },
    {
      id: 2,
      name: "Louis Faglin Paris",
      description:
        "Luxury e-commerce platform with advanced wishlist functionality and dynamic product displays",
      tech: ["Shopify", "Liquid", "JavaScript", "Custom CSS"],
      category: "E-commerce",
      year: "2024",
      status: "Production",
      link: "https://jp.louisfaglin.com/en/collections/jewelry-for-men",
    },
    {
      id: 3,
      name: "SEPL Catalogue",
      description:
        "Comprehensive design system with detailed product catalogues and brand consistency",
      tech: ["Figma", "UI/UX", "Design System"],
      category: "Design",
      year: "2025",
      status: "Completed",
      link: "https://www.figma.com/design/siHgt3GAjB6j7Qd3suxOaS/Product-template?node-id=0-1&t=XzMph460Rjxorh4y-1",
    },
  ];

  const categories = ["All", "Web Development", "E-commerce", "Design"];

  const getFilteredProjects = () => {
    if (activeFilter === "All") return sliderData;
    return sliderData.filter((project) => {
      const title = project.title.toLowerCase();
      const description = project.description.toLowerCase();
      const filter = activeFilter.toLowerCase();

      if (filter.includes("web"))
        return (
          title.includes("page") ||
          title.includes("landing") ||
          description.includes("website")
        );
      if (filter.includes("commerce"))
        return title.includes("shop") || description.includes("store");
      if (filter.includes("design"))
        return (
          title.includes("recipe") ||
          title.includes("hotel") ||
          description.includes("design")
        );
      return true;
    });
  };

  const filteredProjects = getFilteredProjects();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[7%] py-20 scroll-mt-20 relative overflow-hidden">
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm uppercase tracking-wider mb-4 font-semibold text-gray-600 dark:text-gray-400">
          Portfolio
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
          A curated collection demonstrating expertise in web development,
          e-commerce solutions, and user-centered design
        </motion.p>
      </div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center justify-between mb-10">
          <h3 className="text-3xl md:text-4xl font-bold font-Ovo text-gray-900 dark:text-white">
            Featured Projects
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <FeaturedSkeleton />
              <FeaturedSkeleton />
              <FeaturedSkeleton />
            </>
          ) : (
            featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                className="group relative">
                <div className="relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-xl">
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs font-bold rounded-full uppercase tracking-wide">
                            {project.category}
                          </span>
                          <span className="text-gray-400 text-sm">
                            • {project.year}
                          </span>
                        </div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                          {project.name}
                        </h4>
                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm mb-4">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-lg text-xs font-medium border border-gray-200 dark:border-gray-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.status}
                      </span>
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      className="text-gray-700 dark:text-gray-300 text-sm font-semibold hover:text-gray-900 dark:hover:text-white flex items-center gap-2 group/btn transition-all">
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
            ))
          )}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="max-w-7xl mx-auto mb-12">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-3xl md:text-4xl font-bold font-Ovo text-gray-900 dark:text-white">
            All Projects
          </h3>
          <div className="hidden sm:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gray-900 dark:bg-white text-white dark:text-gray-900"
                  : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:border-gray-900 dark:hover:border-white"
              }`}>
              {category}
            </button>
          ))}
        </div>
      </motion.div>

      {/* All Projects Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.7 }}
        className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {isLoading ? (
            <>
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
              <ProjectSkeleton />
            </>
          ) : filteredProjects.length > 0 ? (
            filteredProjects.map((card, index) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="group relative">
                <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-sm hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 overflow-hidden">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="font-Ovo text-lg font-semibold mb-3 text-gray-900 dark:text-white">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                      {card.description}
                    </p>

                    <Link
                      href={card.link}
                      target="_blank"
                      className="inline-flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all group/link">
                      View Project
                      <Image
                        src={assets.right_arrow}
                        alt="Arrow"
                        className="w-4 opacity-70 group-hover/link:opacity-100 group-hover/link:translate-x-1 transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                No projects found in this category.
              </p>
            </div>
          )}
        </div>
      </motion.div>

      {/* Technologies Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="max-w-5xl mx-auto mb-20">
        <div className="relative bg-white dark:bg-gray-900 rounded-2xl p-10 border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold font-Ovo text-center mb-8 text-gray-900 dark:text-white">
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
                transition={{ duration: 0.3, delay: 2.2 + index * 0.05 }}
                className="px-5 py-2.5 bg-gray-50 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:border-gray-900 dark:hover:border-white hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2.4 }}
        className="max-w-4xl mx-auto text-center">
        <div className="relative">
          <div className="relative bg-gray-900 dark:bg-gray-800 rounded-2xl p-16 border border-gray-800 dark:border-gray-700">
            <div className="max-w-2xl mx-auto">
              <h3 className="text-4xl md:text-5xl font-bold font-Ovo text-white mb-6">
                Let's Build Something Exceptional
              </h3>
              <p className="text-gray-300 text-lg mb-10 leading-relaxed">
                Have a project in mind? I'm available for freelance work and
                exciting opportunities. Let's discuss how we can bring your
                vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="#contact"
                  className="px-10 py-5 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-3">
                  Start a Project
                  <svg
                    className="w-5 h-5"
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
