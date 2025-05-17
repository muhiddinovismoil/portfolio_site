import React from "react";
import { Slider } from "@/components";
import Image from "next/image";
import Link from "next/link";
import { SliderXp } from "@/components/client/slider-xp";
export default function Home() {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="pt-[98px]">
                            <div className="flex justify-center">
                                <Image
                                    src={"/my-image.jpg"}
                                    alt="my image"
                                    width={109.11}
                                    height={106.28}
                                    style={{
                                        borderRadius: "100%",
                                    }}
                                />
                            </div>
                            <div className="flex flex-col items-center text-center mt-[20px] gap-[23px] pt-[46.72px]">
                                <h1 className="font-medium text-[32px] font-sans">
                                    Hi, I’m Ismoil
                                </h1>
                                <p className="text-[16px] font-extralight text-gray-400 font-sans max-w-[310px] leading-[187%] text-center">
                                    During{" "}
                                    <span className="font-bold text-white">
                                        the past year
                                    </span>
                                    , I worked as a{" "}
                                    <span className="font-bold text-white">
                                        Full-Stack Developer
                                    </span>
                                    . In that time, I was involved not only in
                                    writing code but also in working with
                                    different teams to plan new features and
                                    build web applications.
                                </p>
                            </div>
                            <div className="flex flex-col items-center pt-[56px] gap-[13px]">
                                <button className="px-[40px] py-[12px] text-black font-bold bg-white rounded-[100px] hover:bg-[#cccccc] cursor-pointer">
                                    Download CV
                                </button>
                                <Link
                                    href={"/experience"}
                                    className="px-[40px] py-[12px]"
                                >
                                    See experiences
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[93px]">
                    <div className="container">
                        <div className="flex flex-col gap-[24px] items-center text-center">
                            <h3 className="font-sans font-medium text-[#717171] text-[16px]">
                                Year of
                            </h3>
                            <h2 className="font-bold text-[80px] leading-[60%] font-sans">
                                XP
                            </h2>
                            <h3 className="max-w-[245px] font-sans font-medium text-[#717171] text-[16px]">
                                with the most popular ecosystem frontend and
                                backend
                            </h3>
                            {/* <SliderXp /> */}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
