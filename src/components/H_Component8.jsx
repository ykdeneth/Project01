import React from "react";
import { HiPlusSmall } from "react-icons/hi2";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const H_Component8 = () => {
  return (
    <div className="flex flex-col w-screen px-5 py-5 lg:flex lg:flex-col md:flex md:flex-col lg:px-20 md:px-10 lg:py-10 md:py-10">
      <div className="flex flex-row items-center justify-center w-full px-2 py-5 text-2xl You lg:text-5xl md:text-3xl lg:text-start md:text-center md:items-center md:justify-center lg:justify-start lg:items-center">
        <motion.div
          variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          Your Quessions, Our Answer
        </motion.div>
      </div>
      <div className="flex flex-col w-full lg:flex lg:flex-row md:flex md:flex-col">
        <div className="relative flex flex-row items-start justify-start w-full px-2 py-5 lg:w-2/5 md:w-full">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="./src/assets/3.jpg"
              alt=""
              className="z-0 object-contain w-full md:scale-[0.8] scale-[1.0] lg:scale-[1.0] items-start md:h-[100%] h-[100%] lg:h-[100%]"
            />
          </motion.div>
        </div>
        <div className="flex flex-col items-center justify-center w-full px-2 py-5 lg:w-3/5 md:w-full">
          <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex flex-col w-full px-5 py-5 border-b-2 border-gray-400"
          >
            <h1 className="px-5 py-5 text-xl text-black champ">
              Can I Request a late Check-out?
            </h1>
            <span className="w-full px-5 text-sm text-gray-700 lg:w-1/2 md:w-full champ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
              amet pariatur dicta obcaecati eligendi nulla explicabo molestiae
            </span>
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-between w-full px-5 py-5 border-b-2 border-gray-400"
          >
            <h1 className="px-5 py-5 text-xl text-black champ">
              Can I Request a late Check-out?
            </h1>
            <HiPlusSmall className="text-2xl" />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-between w-full px-5 py-5 border-b-2 border-gray-400"
          >
            <h1 className="px-5 py-5 text-xl text-black champ">
              Can I Request a late Check-out?
            </h1>
            <HiPlusSmall className="text-2xl" />
          </motion.div>

          <motion.div
            variants={fadeIn("up", 0.6)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex items-center justify-between w-full px-5 py-5 border-b-2 border-gray-400"
          >
            <h1 className="px-5 py-5 text-xl text-black champ">
              Can I Request a late Check-out?
            </h1>
            <HiPlusSmall className="text-2xl" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default H_Component8;
