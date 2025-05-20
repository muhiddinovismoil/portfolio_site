"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import { technologiesData } from "@/data";

export const Slider = () => {
    return (
        <div className="max-w-[375px]">
            <Swiper
                modules={[FreeMode]}
                freeMode={{ enabled: true }}
                loop={true}
                slidesPerView={1.2}
                spaceBetween={20}
                speed={500}
                allowTouchMove={true}
                grabCursor={true}
            >
                {technologiesData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="rounded-[12px] border border-gray-300 w-[305px]">
                            <div className="pt-[26px] pb-[16px] pl-[34px] pr-[71px]">
                                <h2 className="text-[16px] font-normal">
                                    {item.title}
                                </h2>
                                {item.tech_data.map((item) => (
                                    <ul
                                        key={item.id}
                                        className="flex flex-col pt-[17px] gap-[14px]"
                                    >
                                        <li className="flex items-center gap-[14px]">
                                            <div className="min-w-[34px] min-h-[34px] rounded-full bg-[#211f23] flex justify-center items-center">
                                                <img
                                                    src={item.logo}
                                                    alt="javascript icon"
                                                    className="w-[17px]"
                                                />
                                            </div>
                                            <p className="text-[16px]">
                                                {item.name}
                                            </p>
                                        </li>
                                    </ul>
                                ))}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
