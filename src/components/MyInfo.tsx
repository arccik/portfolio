import { CiLocationOn } from "react-icons/ci";
import { socialLinks } from "../data/socialLinks";
import { motion } from "framer-motion";

export default function MyInfo() {
  return (
    <motion.section
      className="p-10 lg:p-20 lg:pt-24 lg:pb-24 rounded-lg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex lg:flex-row flex-col gap-8 lg:gap-16 items-center "
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-col items-center  border-b border-primary rounded-box">
          <motion.span
            className="relative shrink-0"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
          >
            <img
              alt="Artur profile picture"
              width="140"
              height="140"
              decoding="async"
              data-nimg="1"
              className="size-36 lg:size-48 rounded-full object-cover border-4 border-base-300 p-1"
              style={{ color: "transparent" }}
              src="/assets/images/just-me.jpg"
            />
            <div className="absolute inset-0 rounded-full shadow-[0_0_0px_1px_rgba(0,0,0,0.06)]"></div>
          </motion.span>
          <ul className="flex justify-center items-center gap-2 lg:gap-4 lg:justify-start flex-wrap w-full mt-4">
            {socialLinks.map((item, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 15 }}
              >
                <a
                  className="btn btn-square btn-ghost group"
                  href={item.link}
                  target="_blank"
                  aria-label={`Open link to ${item.name}`}
                >
                  <span className="transform duration-200 group-hover:scale-110 fill-base-content">
                    <item.icon className="size-5 lg:size-6" />
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="font-bold lg:font-extrabold text-2xl lg:text-5xl mb-2 lg:mb-4">
            <span className="block text-xl lg:text-3xl mb-2 text-primary">
              Full-Stack Developer
            </span>
            Artur Lozovski
          </h1>
          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6">
            <h2 className="flex gap-2 items-center">
              <CiLocationOn className="size-5 lg:size-6" />
              <span className="text-base-content/80 text-lg lg:text-xl">
                London, United Kingdom
              </span>
            </h2>
          </div>
          <p className="mt-4 lg:mt-6 text-lg lg:text-xl">
            I'm a full-stack developer with 5+ years of experience crafting
            scalable web applications. Specializing in TypeScript, React, and
            Node.js, I bridge the gap between elegant design and robust backend
            systems. Passionate about creating efficient solutions that deliver
            measurable business results while maintaining exceptional user
            experiences.
          </p>
        </div>
      </motion.div>
    </motion.section>
  );
}
