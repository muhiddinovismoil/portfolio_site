"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Slider = () => {
    return (
        <div className="">
            <Swiper
                loop={true}
                autoHeight={true}
                slidesPerView={1}
                spaceBetween={40}
                pagination={{
                    clickable: true,
                }}
                speed={800}
            >
                <SwiperSlide>
                    <div className="slide-content text-white border rounded-[12px] min-w-[305px]">
                        First Slide Content
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content text-white border rounded-[12px] min-w-[305px]">
                        Second Slide Content
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content text-white border rounded-[12px] min-w-[305px]">
                        Third Slide Content
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
