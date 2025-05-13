import Link from "next/link";
import Github from "../../../public/components/github";
import Linkedin from "../../../public/components/linkedin";
import Mail from "../../../public/components/mail";

export function Footer() {
    return (
        <>
            <footer className="pb-[160px]">
                <div className="container">
                    <div className="flex px-[30px] flex-col justify-between space-y-[18px]">
                        <div className="max-w-[325px] flex items-center justify-between rounded-[100px] bg-[#131313]">
                            <h3 className="font-normal text-[16px] pl-[26px] pt-[30px] pb-[25px] text-[#b4b4b4]">
                                Follow me
                            </h3>
                            <div className="flex pr-[26px] py-[24px] gap-[22px]">
                                <Link
                                    href={
                                        "https://github.com/muhiddinovismoil/"
                                    }
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
                                    <Linkedin />
                                </Link>
                                <Link
                                    href={"mailto:muhiddinovismoil2@gmail.com"}
                                    target="_blank"
                                >
                                    <Mail />
                                </Link>
                            </div>
                        </div>
                        <p className="font-light pl-[26px] text-[#fff] leading-[175%] text-[16px]">
                            Muhiddinov's © {new Date().getFullYear()}
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
}
