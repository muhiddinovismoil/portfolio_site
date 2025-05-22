import * as React from "react";

function Telegram(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg width={20} height={16} fill="none" {...props}>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.375 6.888c5.369-2.258 8.949-3.747 10.74-4.466C17.229.37 18.292.012 18.985 0c.152-.002.493.034.713.207a.74.74 0 01.262.481c.025.139.055.454.031.7-.277 2.811-1.476 9.633-2.086 12.781-.259 1.333-.767 1.78-1.259 1.823-1.07.095-1.882-.682-2.917-1.338-1.621-1.025-2.537-1.664-4.11-2.665-1.818-1.156-.64-1.792.396-2.831.272-.272 4.984-4.41 5.075-4.785.011-.047.022-.222-.086-.314-.107-.092-.266-.06-.381-.036-.163.036-2.752 1.688-7.768 4.957-.735.487-1.4.724-1.997.712-.658-.014-1.923-.359-2.863-.654C.842 8.676-.075 8.485.005 7.87c.041-.32.498-.647 1.37-.982z"
                fill="url(#prefix__paint0_linear_2775_23)"
            />
            <defs>
                <linearGradient
                    id="prefix__paint0_linear_2775_23"
                    x1={19.669}
                    y1={0.107}
                    x2={9.182}
                    y2={11.924}
                    gradientUnits="userSpaceOnUse"
                >
                    <stop offset={1} stopColor="#B292FF" />
                </linearGradient>
            </defs>
        </svg>
    );
}

export const MemoTelegram = React.memo(Telegram);
