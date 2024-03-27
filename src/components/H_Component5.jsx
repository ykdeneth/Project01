import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "../components/Swcss.css";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";

import { fadeIn } from "../variants";
import { motion } from "framer-motion";
const H_Component5 = () => {
  return (
    <div className="relative lg:flex">
      <div className="hidden lg:block md:hidden">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={5}
          className="mySwiper qswiper"
        >
          <SwiperSlide className="relative qswiper-slide">
            <img
              src="./src/assets/sense-pavilion-view-1.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
              full
            />

            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>

            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Fine Dining
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-2.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-4.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-1.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-2.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-4.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 w-full h-full text-white lg:flex lg:flex-row lg:justify-center lg:items-start lg:px-5 lg:py-10 lg:text-3xl You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="hidden lg:hidden md:block">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={2}
          className="mySwiper qswiper"
        >
          <SwiperSlide className="relative qswiper-slide">
            <img
              src="./src/assets/sense-pavilion-view-1.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
              full
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-2.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-4.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-1.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-2.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-4.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      {/*  */}
      {/*  */}
      {/*  */}
      <div className="block lg:hidden md:hidden">
        <Swiper
          watchSlidesProgress={true}
          slidesPerView={1}
          className="mySwiper qswiper"
        >
          <SwiperSlide className="relative qswiper-slide">
            <img
              src="./src/assets/sense-pavilion-view-1.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
              full
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-2.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-4.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-1.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-2.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/gallery-4.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative qswiper-slide">
            {" "}
            <img
              src="./src/assets/sense-pavilion-view-3.jpg"
              alt=""
              className="z-0 object-cover w-full h-full md:h-full"
            />
            <motion.div
              variants={fadeIn("up", 0.1)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.3 }}
              className="absolute bg-[#0000007a] w-full h-full top-0 "
            ></motion.div>
            <div className="absolute top-0 flex flex-row items-start justify-center w-full h-full px-5 py-10 text-3xl text-white You">
              <motion.div
                variants={fadeIn("up", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
              >
                Poolside Relaxtion
              </motion.div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default H_Component5;
