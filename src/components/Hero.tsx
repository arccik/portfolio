import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../assets/lottie/designer-animation.json";

export default function Hero() {
  return (
    <section className="hero flex-col min-h-screen md:w-1/2">
      <div className="hero-content flex-col md:flex-row-reverse">
        {/* <Lottie animationData={animationData} width={500} height={500} /> */}
        <div>
          <motion.h1
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl md:text-5xl font-medium  mt-10"
          >
            <span className="text-primary"> Hi there</span>, I'm Artur
          </motion.h1>
          <p className="text-xl md:text-2xl font-thin m-5 ml-0">
            Thank you for visiting my portfolio, and I hope you enjoy exploring
            my exciting works. If you have any questions or would like to
            discuss potential collaborations, please feel free to reach out
          </p>
          {/* <div className="flex justify-center md:justify-normal">
            <a href="#contact" className="btn btn-primary w-full md:w-40">
              Contact me
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}
