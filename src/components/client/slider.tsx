"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";

export const Slider = () => {
    return (
        <div className="max-w-[393px]">
            <Swiper
                modules={[FreeMode]}
                freeMode={{ enabled: true }}
                autoHeight={true}
                loop={true}
                slidesPerView={1.25}
                spaceBetween={20}
                speed={200}
                allowTouchMove={true}
                grabCursor={true}
            >
                <SwiperSlide>
                    <div className="rounded-[12px] border border-gray-300 w-[305px]">
                        <div className="max-w-[200px] pt-[26px] pb-[16px] pl-[34px] pr-[71px]">
                            <p className="text-[16px] font-normal">Front-end</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-[12px] border border-gray-300 w-[305px]">
                        <div className="max-w-[200px] pt-[26px] pb-[16px] pl-[34px] pr-[71px]">
                            <p className="text-[16px] font-normal">Back-end</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-[12px] border border-gray-300 w-[305px]">
                        <div className="max-w-[200px] pt-[26px] pb-[16px] pl-[34px] pr-[71px]">
                            <p className="text-[16px] font-normal">Devops</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="rounded-[12px] border border-gray-300 w-[305px]">
                        <div className="max-w-[200px] pt-[26px] pb-[16px] pl-[34px] pr-[71px]">
                            <p className="text-[16px] font-normal">Languages</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};
