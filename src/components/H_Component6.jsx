import React from "react";
import { HiArrowRight } from "react-icons/hi2";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const H_Component6 = () => {
  return (
    <div className="flex flex-col items-start justify-center w-screen px-5 py-5 lg:px-20 md:px-10 lg:py-10 md:py-10">
      <span className="w-full px-3 py-5 text-2xl text-black text-start lg:text-6xl md:text-4xl lg:px-10 md:px-5 You">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          Elevate Your Stay with Memorable Activities and Relaxation
        </motion.div>
      </span>

      <span className="flex flex-col w-full px-3 py-5 text-xs text-black lg:px-10 md:px-5 lg:flex lg:flex-row md:flex md:flex-col">
        <span className="w-full px-1 text-xs text-black lg:w-1/2 md:w-full lg:text-sm md:text-sm text-start champ">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi, est
            laudantium! Tenetur voluptates odio magni recusandae molestiae cum
            delectus vel ea minima. Rerum accusantium est, voluptas sed
            asperiores cum quidem. Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Modi, est laudantium! Tenetur voluptates odio
            magni recusandae molestiae cum delectus vel ea minima. Rerum
            accusantium est, voluptas sed asperiores cum quidem.
          </motion.div>
        </span>
        <span className="flex flex-row w-1/2 gap-3 px-1 py-5 text-xs text-black champ lg:items-center lg:justify-center md:justify-start md:items-center lg:flex lg:flex-row md:flex md:flex-row lg:text-sm md:text-xs text-start">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <b>Explore Now</b> <HiArrowRight />
          </motion.div>
        </span>
      </span>
    </div>
  );
};

export default H_Component6;
