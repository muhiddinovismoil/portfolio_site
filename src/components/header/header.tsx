import Link from "next/link";

export function Header() {
    return (
        <header className="fixed bottom-[40px] w-full flex justify-center z-50">
            <div className="rounded-[100px] max-w-[325px] w-full bg-[#131313]/70 backdrop-blur-xs  overflow-hidden">
                <div className="flex justify-center overflow-x-auto whitespace-nowrap gap-[45px] pt-[26px] pb-[27px] scrollbar-none">
                    <Link
                        href={"/"}
                        className="pl-[115px] shrink-0 text-white font-light"
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
                        className="shrink-0 text-white font-light pr-[30px]"
                    >
                        education
                    </Link>
                </div>
            </div>
        </header>
    );
}
