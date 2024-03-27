import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const H_Component10 = () => {
  return (
    <div className="relative flex w-screen ">
      <div className="relative w-screen">
        <img
          src="./src/assets/sense-pavilion-view-2.jpg"
          alt=""
          className="z-0 object-cover w-screen h-screen md:h-full"
        />
        <div className="absolute bg-[#000000b7] w-full h-full top-0"></div>
      </div>
      <div className="absolute flex flex-col items-center justify-start w-full px-5 py-5 lg:bottom-32 md:bottom-10 lg:px-20 lg:py-10 lg:w-4/5 md:w-full md:px-20 md:py-10 bottom-20">
        <span className="text-5xl text-orange-300 You lg:text-8xl md:text-5xl">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Ready to Make Memories with us?
          </motion.div>
        </span>
        <span className="flex flex-col items-center justify-between w-full py-5 text-sm text-gray-200 lg:flex lg:flex-row md:flex md:flex-row lg:py-20 md:py-10 lg:text-lg md:text-base">
          <span className="w-full py-5 lg:w-3/4 md:w-2/3 champ">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum
              facere voluptatibus consequatur reprehenderit odit excepturi
              possimus
            </motion.div>
          </span>
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="w-full text-sm text-black bg-orange-400 rounded-sm lg:w-1/4 md:w-1/3 lg:px-10 lg:py-3 md:px-5 md:py-2 lg:text-base md:text-sm"
          >
            <button className="w-full text-sm text-black bg-orange-400 rounded-sm lg:px-10 md:px-5 lg:text-base md:text-sm">
              Book Now
            </button>
          </motion.div>
        </span>
      </div>
    </div>
  );
};

export default H_Component10;
