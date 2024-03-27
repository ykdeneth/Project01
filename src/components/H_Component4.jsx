import React from "react";
import { HiCalendarDays } from "react-icons/hi2";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const H_Component4 = () => {
  return (
    <div className="relative flex flex-col w-screen px-5 py-5 lg:flex lg:flex-col md:flex md:flex-col lg:px-20 md:px-10 lg:py-10 md:py-10">
      <div className="flex flex-row items-center justify-center w-full px-5 py-5 border-b-2 border-gray-300 lg:flex lg:flex-row md:flex md:flex-row lg:py-10 md:py-5 lg:px-5 md:px-5 lg:justify-center lg:items-center md:justify-center md:items-center">
        <div className="flex flex-row items-center justify-between w-full lg:flex lg:flex-row lg:w-1/2 md:w-2/3 md:flex md:flex-row lg:justify-between lg:items-center md:justify-between md:items-center ">
          <span className="text-xl lg:text-3xl md:text-2xl You">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Suite Room
            </motion.div>
          </span>
          <span className="text-xl lg:text-3xl md:text-2xl You">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Deluxy Room
            </motion.div>
          </span>
        </div>
      </div>
      <div className="relative flex flex-row w-full lg:flex lg:flex-row md:flex md:flex-row lg:justify-center lg:items-start">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="./src/assets/gallery-1.jpg"
            alt=""
            className="z-0 object-cover w-full h-full md:h-screen md:scale-[0.8] scale-[1.0] lg:scale-[0.8]"
          />
        </motion.div>
        <div className="absolute bg-[#0000007a] w-full h-full top-0 md:scale-[0.8] scale-[1.0] lg:scale-[0.8]"></div>
      </div>
      <div className="flex flex-col w-full lg:flex lg:flex-row md:flex md:flex-row lg:justify-between md:justify-between lg:items-center md:items-center">
        <div className="flex flex-col w-full px-5 py-3 lg:w-1/5 md:w-1/4">
          <span className="py-5 text-gray-600 text-start">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <HiCalendarDays className="text-5xl" />
            </motion.div>
          </span>
          <span className="py-5 text-3xl text-black text-start md:text-xl lg:text-3xl You">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              High Speed WiFi
            </motion.div>
          </span>
          <span className="py-5 text-black text-start lg:text-sm champ">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              numquam esse deserunt fugit aliquid facere odit suscipit corporis
              doloribus voluptatum, assumenda temporibus repellat repellendus at
              impedit, sit rerum, sunt quisquam!
            </motion.div>
          </span>
        </div>
        <div className="flex flex-col w-full px-5 py-3 lg:w-1/5 md:w-1/4">
          <span className="py-5 text-gray-600 text-start">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <HiCalendarDays className="text-5xl" />
            </motion.div>
          </span>
          <span className="py-5 text-3xl text-black text-start md:text-xl lg:text-3xl You">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              High Speed WiFi
            </motion.div>
          </span>
          <span className="py-5 text-black text-start lg:text-sm champ">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              numquam esse deserunt fugit aliquid facere odit suscipit corporis
              doloribus voluptatum, assumenda temporibus repellat repellendus at
              impedit, sit rerum, sunt quisquam!
            </motion.div>
          </span>
        </div>
        <div className="flex flex-col w-full px-5 py-3 lg:w-1/5 md:w-1/4">
          <span className="py-5 text-gray-600 text-start">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <HiCalendarDays className="text-5xl" />
            </motion.div>
          </span>
          <span className="py-5 text-3xl text-black text-start md:text-xl lg:text-3xl You">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              High Speed WiFi
            </motion.div>
          </span>
          <span className="py-5 text-black text-start lg:text-sm champ">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              numquam esse deserunt fugit aliquid facere odit suscipit corporis
              doloribus voluptatum, assumenda temporibus repellat repellendus at
              impedit, sit rerum, sunt quisquam!
            </motion.div>
          </span>
        </div>
        <div className="flex flex-col w-full px-5 py-3 lg:w-1/5 md:w-1/4">
          <span className="py-5 text-gray-600 text-start">
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              <HiCalendarDays className="text-5xl" />
            </motion.div>
          </span>
          <span className="py-5 text-3xl text-black md:text-xl text-start lg:text-3xl You">
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              High Speed WiFi
            </motion.div>
          </span>
          <span className="py-5 text-black text-start lg:text-sm champ">
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
            >
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              numquam esse deserunt fugit aliquid facere odit suscipit corporis
              doloribus voluptatum, assumenda temporibus repellat repellendus at
              impedit, sit rerum, sunt quisquam!
            </motion.div>
          </span>
        </div>
      </div>
    </div>
  );
};

export default H_Component4;
