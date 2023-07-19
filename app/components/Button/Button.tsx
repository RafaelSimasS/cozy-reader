import { ReactNode, ButtonHTMLAttributes } from "react";

type ButtonProps = {
    children?: ReactNode;
} & ButtonHTMLAttributes<HTMLButtonElement>;

import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});


export function Button ({children, ...rest} : ButtonProps){

    return (
        <button className={`${cairo.className}`} {...rest}>
            {children}
        </button>
    )


}