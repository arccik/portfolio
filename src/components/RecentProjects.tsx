import Card from "./Card";
import data from "../data/projects.json";
import { motion, stagger } from "framer-motion";

export default function RecentProjects() {
  return (
    <div className="bg-base-300 min-h-screen md:flex  md:items-center overflow-auto">
      <div className="carousel-indicator text-center p-5">
        <h1 className="text-4xl font-bold">Projects</h1>
        <span className="text-secondary text-xs font-light">
          (More coming soon)
        </span>
      </div>
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          when: "beforeChildren",
          staggerChildren: 0.4,
        }}
        className="carousel rounded-box"
      >
        {data.map((project) => (
          <div key={project.title} className="carousel-item m-2">
            <Card
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              key={project.id}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
