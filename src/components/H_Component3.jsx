import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import "../components/Fonts.css";
const H_Component3 = () => {
  return (
    <div className="relative flex flex-col w-screen py-20 lg:flex lg:flex-col md:flex md:flex-col lg:py-10 md:py-5">
      <div className="flex flex-col w-screen px-10 py-5 lg:flex lg:flex-row md:flex md:flex-row lg:px-20 md:px-16 lg:py-5 md:py-10">
        <span className="w-full text-3xl font-extrabold text-black You text-start lg:w-1/2 md:w-1/2 lg:text-6xl md:text-3xl">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Luxurious Stay
          </motion.div>
        </span>
        <span className="w-full text-sm text-black text-start lg:w-1/2 md:w-1/2 lg:text-base md:text-sm champ">
          <motion.div
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae eos
            neque mollitia culpa molestiae, enim officia dolore quia harum
            repellat odio incidunt officiis facere commodi et omnis, provident
            animi voluptatum!
          </motion.div>
        </span>
      </div>
      <div className="relative w-screen">
        <img
          src="./src/assets/sense-pavilion-view-4.jpg"
          alt=""
          className="z-0 object-cover w-screen h-screen md:h-screen"
        />
        <div className="absolute bg-[#0000007a] w-full h-full top-0"></div>
      </div>
      <div className="absolute hidden w-screen bottom-12 lg:flex md:flex lg:flex-row md:flex-row lg:px-36 md:px-5 lg:py-10 md:py-10 lg:justify-between md:justify-between lg:items-center md:items-center">
        <span className="py-1 text-lg text-white hover:border-b-2 hover:border-white You">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Luxury King Suite
          </motion.div>
        </span>
        <span className="py-1 text-lg text-white hover:border-b-2 hover:border-white You">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Presidential Sute
          </motion.div>
        </span>
        <span className="py-1 text-lg text-white hover:border-b-2 hover:border-white You">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Delux Ocean View Room
          </motion.div>
        </span>
        <span className="py-1 text-lg text-white hover:border-b-2 hover:border-white You">
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Delux Ocean Spa
          </motion.div>
        </span>
      </div>
    </div>
  );
};

export default H_Component3;
