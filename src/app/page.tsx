import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Slider, SliderXp } from "@/components";
export default function Home() {
    return (
        <>
            <main>
                <section>
                    <div className="container">
                        <div className="pt-[98px] xl:flex xl:justify-around xl:items-center 2xl:justify-between 2xl:pt-[128px]">
                            <div className="flex justify-center xl:hidden">
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
                            <div className="flex flex-col items-center text-center mt-[20px] gap-[23px] pt-[46.72px] xl:items-start">
                                <h1 className="font-medium text-[32px] font-sans xl:text-[64px]">
                                    Hi, I’m Ismoil
                                </h1>
                                <p className="text-[16px] font-extralight text-gray-400 font-sans w-full leading-[187%] text-center xl:text-start xl:text-[18px] xl:max-w-[502px]">
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
                                <div className="flex flex-col items-center pt-[56px] gap-[13px] xl:flex-row xl:gap-[28px] xl:pt-[25px]">
                                    <a
                                        href="/cv/MuhiddinovIsmoil-Resume.pdf"
                                        download
                                        className="px-[40px] py-[12px] text-black font-bold bg-white rounded-[100px] hover:bg-[#cccccc] cursor-pointer"
                                    >
                                        Download CV
                                    </a>
                                    <Link
                                        href={"/experience"}
                                        className="px-[40px] py-[12px]"
                                    >
                                        See experiences
                                    </Link>
                                </div>
                            </div>
                            <div className="hidden pt-[76px] xl:block">
                                <Image
                                    src={"/my-image.jpg"}
                                    alt="my image"
                                    width={390}
                                    height={379.28}
                                    style={{
                                        borderRadius: "100%",
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[93px] pb-[107px]">
                    <div className="container">
                        <div className="flex flex-col gap-[24px] items-center text-center xl:flex-rows">
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
                            <div className="pt-[55px]">
                                <SliderXp />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="pt-[117px] pb-[104px]">
                    <div className="container">
                        <div className=" flex flex-col gap-[100px] items-center">
                            <p className="text-center text-[40px] font-semibold text-[#c69aff] xl:text-[64px]">
                                Javascript
                            </p>
                            <p className="text-center text-[40px] font-semibold text-[#9f53ff] xl:text-[64px]">
                                Node.js
                            </p>
                            <p className="text-center text-[40px] font-semibold text-[#6104d6] xl:text-[64px]">
                                Coffee
                            </p>
                        </div>
                    </div>
                </section>
                <section className="pt-[104px] pb-[110px]">
                    <div className="container">
                        <div className="flex flex-col items-center gap-[62px] xl:gap-[78px]">
                            <p className="text-center max-w-[326px] text-[32px] font-normal text-gray-300 xl:text-5xl xl:max-w-[626px]">
                                These are the technologies that I’ve been using
                            </p>
                            <Slider />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
