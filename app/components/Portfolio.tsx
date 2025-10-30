"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { sliderData, assets } from "@/assets/assets";
import { FeaturedProject } from "@/lib/types";

// Skeleton Component
const ProjectSkeleton: React.FC = () => (
  <div className="relative animate-pulse overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-700 dark:bg-gray-900">
    <div className="relative h-64 bg-gray-200 dark:bg-gray-800"></div>
    <div className="p-6">
      <div className="mb-3 h-6 w-3/4 rounded bg-gray-200 dark:bg-gray-800"></div>
      <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
      <div className="mb-4 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800"></div>
      <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800"></div>
    </div>
  </div>
);

const FeaturedSkeleton: React.FC = () => (
  <div className="relative animate-pulse overflow-hidden rounded-2xl border border-gray-200 bg-white dark:border-gray-700 dark:bg-gray-900">
    <div className="p-6">
      <div className="mb-3 flex items-center gap-3">
        <div className="h-6 w-24 rounded-full bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 w-16 rounded bg-gray-200 dark:bg-gray-800"></div>
      </div>
      <div className="mb-3 h-7 w-3/4 rounded bg-gray-200 dark:bg-gray-800"></div>
      <div className="mb-2 h-4 w-full rounded bg-gray-200 dark:bg-gray-800"></div>
      <div className="mb-4 h-4 w-5/6 rounded bg-gray-200 dark:bg-gray-800"></div>
      <div className="mb-6 flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-6 w-20 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-6 w-24 rounded-lg bg-gray-200 dark:bg-gray-800"></div>
      </div>
    </div>
    <div className="border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50">
      <div className="flex items-center justify-between">
        <div className="h-4 w-20 rounded bg-gray-200 dark:bg-gray-800"></div>
        <div className="h-4 w-24 rounded bg-gray-200 dark:bg-gray-800"></div>
      </div>
    </div>
  </div>
);

const featuredProjects: FeaturedProject[] = [
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

const categories = ["All", "Web Development", "E-commerce", "Design"] as const;

/**
 * Portfolio section showcasing featured and all projects
 */
const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<typeof categories[number]>(
    "All"
  );
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

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
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="relative scroll-mt-20 overflow-hidden px-[7%] py-20"
      aria-labelledby="portfolio-heading"
    >
      <div className="absolute right-0 top-20 -z-10 h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -z-10 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-3xl"></div>

      {/* Header */}
      <div className="mx-auto mb-16 max-w-4xl text-center">
        <motion.h4
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-400"
        >
          Portfolio
        </motion.h4>

        <motion.h2
          id="portfolio-heading"
          initial={{ y: -20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-6 text-5xl font-Ovo text-gray-900 dark:text-white md:text-6xl"
        >
          Selected Works
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mx-auto max-w-2xl text-lg leading-relaxed text-gray-600 dark:text-gray-300"
        >
          A curated collection demonstrating expertise in web development,
          e-commerce solutions, and user-centered design
        </motion.p>
      </div>

      {/* Featured Projects */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mx-auto mb-20 max-w-7xl"
      >
        <div className="mb-10 flex items-center justify-between">
          <h3 className="text-3xl font-bold font-Ovo text-gray-900 dark:text-white md:text-4xl">
            Featured Projects
          </h3>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            <>
              <FeaturedSkeleton />
              <FeaturedSkeleton />
              <FeaturedSkeleton />
            </>
          ) : (
            featuredProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 + index * 0.15 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all hover:border-gray-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600">
                  <div className="p-6">
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex-1">
                        <div className="mb-3 flex items-center gap-3">
                          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                            {project.category}
                          </span>
                          <span className="text-sm text-gray-400">
                            • {project.year}
                          </span>
                        </div>
                        <h4 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                          {project.name}
                        </h4>
                        <p className="mb-4 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                          {project.description}
                        </p>
                      </div>
                    </div>

                    <div className="mb-6 flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="rounded-lg border border-gray-200 bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 bg-gray-50 px-6 py-4 dark:border-gray-700 dark:bg-gray-800/50">
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 rounded-full bg-green-500"></div>
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {project.status}
                      </span>
                    </div>
                    <Link
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/btn flex items-center gap-2 text-sm font-semibold text-gray-700 transition-all hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      View Project
                      <svg
                        className="h-4 w-4 transition-transform group-hover/btn:translate-x-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
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
              </motion.article>
            ))
          )}
        </div>
      </motion.div>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1.5 }}
        className="mx-auto mb-12 max-w-7xl"
      >
        <div className="mb-8 flex items-center justify-between">
          <h3 className="text-3xl font-bold font-Ovo text-gray-900 dark:text-white md:text-4xl">
            All Projects
          </h3>
          <div className="hidden items-center gap-2 text-sm text-gray-500 dark:text-gray-400 sm:flex">
            <span>
              {filteredProjects.length}{" "}
              {filteredProjects.length === 1 ? "Project" : "Projects"}
            </span>
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-3">
          {categories.map((category, idx) => (
            <button
              key={idx}
              onClick={() => setActiveFilter(category)}
              className={`rounded-full px-6 py-2.5 font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900"
                  : "border border-gray-300 bg-white text-gray-700 hover:border-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-white"
              }`}
            >
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
        className="mx-auto mb-20 max-w-7xl"
      >
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
              <motion.article
                key={card.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.8 + index * 0.1 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-all hover:border-gray-300 hover:shadow-xl dark:border-gray-700 dark:bg-gray-900 dark:hover:border-gray-600">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={card.src}
                      alt={card.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h4 className="mb-3 font-Ovo text-lg font-semibold text-gray-900 dark:text-white">
                      {card.title}
                    </h4>
                    <p className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                      {card.description}
                    </p>

                    <Link
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/link inline-flex items-center gap-2 text-sm font-medium text-gray-700 transition-all hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
                    >
                      View Project
                      <Image
                        src={assets.right_arrow}
                        alt=""
                        className="w-4 opacity-70 transition-all group-hover/link:translate-x-1 group-hover/link:opacity-100"
                      />
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))
          ) : (
            <div className="col-span-full py-12 text-center">
              <p className="text-lg text-gray-600 dark:text-gray-400">
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
        className="mx-auto mb-20 max-w-5xl"
      >
        <div className="relative rounded-2xl border border-gray-200 bg-white p-10 dark:border-gray-700 dark:bg-gray-900">
          <h3 className="mb-8 text-center text-2xl font-bold font-Ovo text-gray-900 dark:text-white">
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
                className="rounded-full border border-gray-200 bg-gray-50 px-5 py-2.5 text-sm font-medium text-gray-700 transition-all hover:border-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300 dark:hover:border-white dark:hover:bg-gray-700"
              >
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
        className="mx-auto max-w-4xl text-center"
      >
        <div className="relative">
          <div className="relative rounded-2xl border border-gray-800 bg-gray-900 p-16 dark:border-gray-700 dark:bg-gray-800">
            <div className="mx-auto max-w-2xl">
              <h3 className="mb-6 text-4xl font-bold font-Ovo text-white md:text-5xl">
                Let's Build Something Exceptional
              </h3>
              <p className="mb-10 text-lg leading-relaxed text-gray-300">
                Have a project in mind? I'm available for freelance work and
                exciting opportunities. Let's discuss how we can bring your
                vision to life.
              </p>
              <div className="flex flex-col justify-center gap-4 sm:flex-row">
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-3 rounded-full bg-white px-10 py-5 font-bold text-gray-900 transition-all duration-300 hover:bg-gray-100"
                >
                  Start a Project
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
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
                  className="flex items-center justify-center gap-3 rounded-full border-2 border-white bg-transparent px-10 py-5 font-bold text-white transition-all duration-300 hover:bg-white hover:text-gray-900"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
