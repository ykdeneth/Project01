import React from "react";
import { fadeIn } from "../variants";
import { motion } from "framer-motion";
import "../components/Fonts.css";
const H_Component2 = () => {
  return (
    <div className="relative flex flex-col w-screen h-screen px-5 py-5 text-white bg-white lg:px-20 lg:py-20 md:px-10 md:py-10 lg:flex lg:flex-row md:flex md:flex-col">
      <div className="flex flex-col w-full px-3 py-5 lg:w-1/2 md:w-full lg:flex lg:flex-col md:flex md:flex-col">
        <div className="flex w-full px-2 lg:pb-20">
          <motion.div
            variants={fadeIn("right", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="./src/assets/gallery-2.jpg"
              alt=""
              className="z-0 object-cover w-screen h-full md:h-full"
            />
          </motion.div>
        </div>
        <div className="flex w-full px-2 py-2 text-black lg:py-10 champ">
          <motion.div
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            unde vitae qui eveniet aperiam autem maiores adipisci inventore
            accusantium, ipsam in minus eum cumque officiis similique corrupti
            corporis doloremque dicta.
          </motion.div>
        </div>
      </div>
      <div className="flex flex-col w-full px-3 py-5 lg:w-1/2 md:w-full lg:flex lg:flex-col md:flex md:flex-col">
        <span className="flex w-full px-2 py-2 text-3xl font-extrabold text-black You lg:pb-5 lg:text-6xl md:text-2xl">
          <motion.div
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <b> Our Hotel Legacy</b>
          </motion.div>
        </span>
        <div className="flex w-full px-2 py-2 text-black lg:pb-5 champ">
          <motion.div
            variants={fadeIn("left", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat
            unde vitae qui eveniet aperiam autem maiores adipisci inventore
            accusantium, ipsam in minus eum cumque officiis similique corrupti
            corporis doloremque dicta.
          </motion.div>
        </div>
        <div className="flex w-full px-2 py-2 lg:py-10">
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            <img
              src="./src/assets/gallery-2.jpg"
              alt=""
              className="z-0 object-cover w-screen h-full md:h-full"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default H_Component2;
