"use client";
import React from "react";
import Image from "next/image";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { xpData } from "@/data";

export const SliderXp = () => {
    return (
        <div className="max-w-[325px]">
            <Swiper
                modules={[Pagination]}
                spaceBetween={10}
                slidesPerView={1.4}
                // pagination={{ clickable: true }}
            >
                {xpData.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div
                            className="max-w-[220px] rounded-[60px]"
                            style={{ backgroundColor: item.bgColor }}
                        >
                            <div className="flex flex-col gap-[14.75px] items-start pl-[30px] pt-[56.75px] pb-[47px] pr-[110px]">
                                <Image
                                    src={item.logo}
                                    alt="skills icon"
                                    width={52.5}
                                    height={52.5}
                                />
                                <p
                                    className="text-[16px] font-bold"
                                    style={{ color: item.textColor }}
                                >
                                    {item.name}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
