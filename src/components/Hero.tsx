import avatar from "../assets/avatar.svg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="hero md:h-screen h-[100wvh] bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          // animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.3,
          }}
          src={avatar}
          className="max-w-sm rounded-lg shadow-2xl md:w-full w-[300px]"
        />
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            duration: 0.5,
          }}
        >
          <motion.h1
            initial={{ y: -100 }}
            whileInView={{ y: 0 }}
            className="text-5xl font-medium"
          >
            Hi there, I'm Artur
          </motion.h1>
          <p className="text-2xl font-thin m-5 ml-0">
            As a passionate Full-Stack web developer with years of experience, I
            have honed my skills in crafting sleek and intuitive designs that go
            beyond the expectations of clients. By collaborating closely, we can
            swiftly and effectively transform your vision into reality.
          </p>

          <button className="btn btn-primary">Get In Touch</button>
        </motion.div>
      </div>
    </div>
  );
}
