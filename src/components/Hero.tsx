import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/cooding2.json";

export default function Hero() {
  return (
    <div className="hero md:h-screen h-[100wvh] bg-base-200">
      <div className="hero-content flex-col md:flex-row-reverse">
        <Lottie
          className="md:scale-150"
          animationData={animationData}
          width={500}
          height={500}
        />
        <div>
          <motion.h1
            initial={{ y: 200 }}
            whileInView={{ y: 0 }}
            className="text-4xl md:text-5xl font-medium"
          >
            <span className="text-primary"> Hi there</span>, I'm Artur
          </motion.h1>
          <p className="text-xl md:text-2xl font-thin m-5 ml-0">
            As a passionate Full-Stack web developer with years of experience, I
            have honed my skills in crafting sleek and intuitive designs that go
            beyond the expectations of clients. By collaborating closely, we can
            swiftly and effectively transform your vision into reality.
          </p>

          <a href="#contact" className="btn btn-primary">
            Get In Touch
          </a>
        </div>
      </div>
    </div>
  );
}
