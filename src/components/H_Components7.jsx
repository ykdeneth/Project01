import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { HiArrowRight } from "react-icons/hi2";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import "../components/Swicss.css";

const H_Components7 = () => {
  return (
    <div className="py-5 lg:py-10 md:py-5">
      <div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper wswiper"
        >
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/1.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/2.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/3.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/4.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/5.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/8.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/9.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/10.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide className="relative wswiper-slide">
            <img src="./src/assets/11.jpg" />
            <div className="absolute flex items-center justify-between w-full px-5 py-3 text-xs text-black">
              <span className="w-2/3 champ">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deleniti atque quia pariatur, ipsum libero tenetur sint possimus
              </span>
              <span className="flex items-end justify-center w-1/3 gap-2 text-xs">
                <b>Explore Now</b> <HiArrowRight className="" />
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div></div>
    </div>
  );
};

export default H_Components7;
