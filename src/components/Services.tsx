import services from "../data/services.json";
import {
  PiStrategyFill,
  PiTreePalmBold,
  PiBoundingBoxBold,
} from "react-icons/pi";
import { motion } from "framer-motion";

export default function Services() {
  const icons = [<PiStrategyFill />, <PiTreePalmBold />, <PiBoundingBoxBold />];
  return (
    <motion.section
      className="md:flex md:flex-col md:justify-center items-center mt-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex lg:flex-row flex-col flex-wrap justify-center gap-4 place-items-center pb-5"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {services.map((item, index) => (
          <motion.div
            key={item.title}
            className="card md:w-96 m-2 h-72 bg-base-100 shadow-xl hover:bg-base-300 group"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <div className="card-body">
              <div className="text-5xl group-hover:text-secondary">
                {icons[index]}
              </div>
              <h2 className="card-title group-hover:text-secondary hover:text-secondary">
                {item.title}
              </h2>
              <p>{item.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
