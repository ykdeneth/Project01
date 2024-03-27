import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "../components/Fonts.css";

import { fadeIn } from "../variants";

import { motion } from "framer-motion";

const HeroPage = () => {
  return (
    <div className="relative flex flex-row w-screen h-screen ">
      <div className="absolute w-screen ">
        <img
          src="./src/assets/sense-pavilion-view-3.jpg"
          alt=""
          className="z-0 object-cover w-screen h-screen md:h-screen"
        />
      </div>
      <div className="w-screen h-screen absolute bg-[#000000b7] z-10 lg:flex lg:flex-col md:flex md:flex-col flex flex-col lg:justify-center lg:items-start md:justify-start md:items-center px-5 py-5 lg:px-20 lg:py-20 md:py-10 md:px-10">
        <span className="w-full py-10 text-lg text-white lg:text-3xl md:text-lg md:text-center lg:text-start champ">
          <motion.div
            variants={fadeIn("up", 0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            ----- Elegance Awaits at the entress
          </motion.div>
        </span>
        <span className="text-3xl text-white lg:w-1/2 md:w-full md:text-4xl lg:text-7xl md:text-center lg:text-start You">
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
          >
            An Inviting Entrance that Promises Luxery
          </motion.div>
        </span>
      </div>
    </div>
  );
};

export default HeroPage;
