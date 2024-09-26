import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../animation/animate";
import{Link} from 'react-router-dom'

const Hero = () => {
  return (
    <div
      className="relative w-full h-[86vh] bg-cover bg-center"
      style={{
        backgroundImage:
          'url("https://www.elmens.com/wp-content/uploads/2020/04/7-Home-Interiors-Decor-Tips-for-the-Best-First-Impression-in-2020.jpg")',
      }}
    >
      <div className="container h-full flex items-center justify-center text-gray-800 ">
        <div className="text-center md:text-left p-10 border-1  p-3 bg-black/60 backdrop-blur-lg">
          {/* Text section */}
          <motion.h1
            variants={SlideUp(0.2)}
            initial="initial"
            animate="animate"
            className="text-5xl font-bold font-serif  md:text-300 text-white "
          >
            SKETCH LUXURY INTERIOR DESIGN
          </motion.h1>
          <motion.p
            variants={SlideUp(0.5)}
            initial="initial"
            animate="animate"
            className="text-sm md:text-base text-gray-300 leading-7 mt-4"
          >
            Bring your dream to life with one-on-one design help & hand-picked
            products tailored to your style, space, and budget.
          </motion.p>
          <div className="space-x-4 mt-6">
            <motion.button
              variants={SlideUp(0.8)}
              initial="initial"
              animate="animate"
              className="primary-btn uppercase bg-gray-800 text-white shadow-[5px_5px_0px_0px_#6c6c6c]"
            >
              Get started
            </motion.button>
            <motion.button
              variants={SlideUp(1.1)}
              initial="initial"
              animate="animate"
              className="primary-btn uppercase bg-white text-gray-800"
            >
              <Link to="/contacts">Contact Us</Link>
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
