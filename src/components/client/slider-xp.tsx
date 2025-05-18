"use client";
import Image from "next/image";
import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export const SliderXp = () => {
    return (
        <div className="max-w-[325px]">
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1.4}
                // pagination={{ clickable: true }}
            >
                <SwiperSlide>
                    <div className="max-w-[220px] rounded-[60px] bg-[#bbc098]">
                        <div className="flex flex-col gap-[14.75px] items-start pl-[30px] pt-[56.75px] pb-[47px] pr-[110px]">
                            <Image
                                src={"/javascript.svg"}
                                alt="skills icon"
                                width={52.5}
                                height={52.5}
                            />
                            <p className="text-gray-700 text-[16px] font-bold">
                                JavaScript
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-[220px] bg-[#739099]  rounded-[60px]">
                        <div className="flex flex-col gap-[14.75px] items-start pl-[30px] pt-[56.75px] pb-[47px] pr-[110px]">
                            <Image
                                src={"/reactjs.svg"}
                                alt="skills icon"
                                width={52.5}
                                height={52.5}
                            />
                            <p className="text-gray-700 text-[16px] font-bold">
                                React
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-[220px] bg-green-200 rounded-[60px]">
                        <div className="flex flex-col gap-[14.75px] items-start pl-[30px] pt-[56.75px] pb-[47px] pr-[110px]">
                            <Image
                                src={"/nodejs.svg"}
                                alt="skills icon"
                                width={52.5}
                                height={52.5}
                            />
                            <p className="text-gray-700 text-[16px] font-bold">
                                Node.js
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="max-w-[220px] bg-[#283959] rounded-[60px]">
                        <div className="flex flex-col gap-[14.75px] items-start pl-[30px] pt-[56.75px] pb-[47px] pr-[110px]">
                            <Image
                                src={"/nestjs.svg"}
                                alt="skills icon"
                                width={52.5}
                                height={52.5}
                            />
                            <p className="text-[#A7A7A7] text-[16px] font-bold">
                                Nest.js
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
