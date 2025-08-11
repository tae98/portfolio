// src/components/Portfolio.jsx
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { portfolio } from "../data";
import { SectionWrapper } from "../hoc"; // ✅ 꼭 필요
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image, tags, github }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("show");
  }, [controls, inView]);

  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={fadeIn("up", "spring", 0, 0.75)}
      className={`w-full mt-[-2px] flex flex-col md:flex-row ${
        isEven ? "md:flex-row" : "md:flex-row-reverse"
      } gap-5`}
    >
      <div className="relative w-full md:w-3/5">
        <img
          src={image}
          alt="project_image"
          className="w-full h-auto object-cover md:rounded-3xl"
        />
      </div>

      <div
        className={`w-full md:w-2/5 px-6 md:p-16 flex flex-col justify-center ${
          isEven ? "text-left md:text-left" : "text-left md:text-right"
        }`}
      >
        <h3 className="text-white font-medium text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl lg:text-5xl leading-tight">
          {name}
        </h3>
        <p className="mt-4 text-secondary text-sm sm:text-xs md:text-sm lg:text-md xl:text-lg 2xl:text-xl">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-3">
          {tags?.map((tag, idx) => (
            <span
              key={idx}
              className="bg-[#1e293b] text-white text-xs px-2 py-1 rounded-md font-mono border border-sky-500"
            >
              {tag}
            </span>
          ))}
        </div>

        {github && (
          <div className="mt-5">
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#24292e] text-white text-sm rounded-md hover:bg-[#333] transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M12 .5C5.73.5.5 5.73.5 12a11.5 11.5 0 008.06 10.94c.59.11.8-.26.8-.58v-2.03c-3.28.71-3.97-1.58-3.97-1.58-.54-1.38-1.33-1.74-1.33-1.74-1.09-.75.08-.73.08-.73 1.2.08 1.83 1.24 1.83 1.24 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.62-.3-5.38-1.31-5.38-5.85 0-1.29.46-2.35 1.23-3.18-.12-.3-.53-1.52.12-3.16 0 0 .99-.32 3.25 1.21a11.35 11.35 0 015.92 0c2.26-1.53 3.25-1.21 3.25-1.21.65 1.64.24 2.86.12 3.16.77.83 1.23 1.89 1.23 3.18 0 4.55-2.76 5.55-5.39 5.85.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.81.58A11.5 11.5 0 0023.5 12c0-6.27-5.23-11.5-11.5-11.5z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
          </div>
        )}
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  return (
    <div className="text-center md:text-left md:px-20 lg:px-40">
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionText}`}>Portfolio</h2>
      </motion.div>

      <div className="mt-10 md:mt-20 flex flex-col gap-10 md:gap-20">
        {portfolio.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Portfolio, "portfolio"); // ✅ default export 유지
