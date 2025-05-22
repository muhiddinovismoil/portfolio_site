import Link from "next/link";
import { Github, LinkedIn, Mail } from "@public/components";

export function Footer() {
    return (
        <>
            <footer className="pb-[160px] md:pb-[100px] lg:pb-[80px] xl:pb-[60px] 2xl:pb-[40px]">
                <div className="container">
                    <div className="flex px-[30px] flex-col justify-between space-y-[18px]">
                        <div className="min-x-w-[325px] flex items-center justify-between rounded-[100px] bg-[#131313] md:flex 2xl:max-w-[1450px]">
                            <p className="font-extralight text-[16px] pl-[26px] pt-[25px] pb-[25px] text-[#b4b4b4] md:text-[18px] md:pl-[55px] md:pt-[30px]">
                                Follow me
                            </p>
                            <div className="flex pr-[26px] py-[24px] gap-[22px] md:flex md:gap-[28px] md:pr-[55px]">
                                <Link
                                    href={"https://github.com/muhiddinovismoil"}
                                    target="_blank"
                                >
                                    <Github />
                                </Link>
                                <Link
                                    href={
                                        "https://www.linkedin.com/in/ismoil-mukhiddinov-748564340"
                                    }
                                    target="_blank"
                                >
                                    <LinkedIn />
                                </Link>
                                <Link
                                    href={"mailto:mukhiddinovvismoil@gmail.com"}
                                    target="_blank"
                                >
                                    <Mail />
                                </Link>
                            </div>
                        </div>
                        <p className="font-light pl-[26px] text-[#fff] leading-[175%] text-[16px] md:pl-[55px]">
                            Muhiddinov's © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
