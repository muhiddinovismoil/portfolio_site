import * as components from "@public/components";
import Link from "next/link";

export function Header() {
    return (
        <header className="fixed bottom-[40px] w-full flex justify-center z-50 xl:bottom-[90%]">
            <div className="rounded-[100px] max-w-[325px] w-full bg-[#131313]/70 backdrop-blur-md overflow-hidden xl:max-w-[610px]">
                <div className="flex justify-center overflow-x-auto whitespace-nowrap gap-[45px] pt-[26px] pb-[27px] scrollbar-none xl:overflow-x-hidden xl:justify-start xl:gap-[42px]">
                    <Link
                        href={"/"}
                        className="pl-[115px] shrink-0 text-white font-light xl:pl-[45px]"
                    >
                        muhiddinov
                    </Link>
                    <Link
                        href={"/experience"}
                        className="shrink-0 text-purple-300 hover:text-[#846fb4] font-light"
                    >
                        experience
                    </Link>
                    <Link
                        href={"/education"}
                        className="shrink-0 text-white font-light pr-[30px] xl:pr-0"
                    >
                        education
                    </Link>
                    <ul className="hidden xl:flex gap-[16px] max-w-[184px] pt-[3px] pl-[20px]">
                        <li>
                            <Link
                                href={"https://github.com/muhiddinovismoil"}
                                target="_blank"
                            >
                                <components.Github />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={
                                    "https://www.linkedin.com/in/ismoil-mukhiddinov-748564340"
                                }
                                target="_blank"
                            >
                                <components.LinkedIn />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"https://t.me/codingwithismoil"}
                                target="_blank"
                            >
                                <components.MemoTelegram />
                            </Link>
                        </li>
                        <li>
                            <Link
                                href={"mailto:mukhiddinovvismoil@gmail.com"}
                                target="_blank"
                            >
                                <components.Mail />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    );
}
