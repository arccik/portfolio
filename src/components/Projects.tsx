import Card from "./Card";
import data from "../data/projects.json";
import React from "react";
import { motion } from "framer-motion";

export default function RecentProjects() {
  return (
    <motion.section
      className="p-6 lg:p-12 lg:pt-16 lg:pb-16 "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="p-5 text-center mb-3">
        <h1 className="font-extrabold text-2xl lg:text-5xl mb-2 lg:mb-4">
          Explore My Projects
        </h1>
        <p className="text-lg lg:text-xl text-primary">
          Click an icon to dive into my projects
        </p>
      </div>
      <motion.div
        className="rounded-box flex flex-wrap p-2 sm:justify-center gap-4 flex-grow"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {data.map((project: any) => (
          <React.Fragment key={project.title}>
            <div>
              <Card
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                key={project.id}
                link={project.link}
                githubLink={project.github_link}
              />
            </div>
            <div className="divider md:hidden"></div>
          </React.Fragment>
        ))}
      </motion.div>
    </motion.section>
  );
}
