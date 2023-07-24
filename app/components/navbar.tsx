"use client";
import Link from "next/link";

import { Button } from "@/app/components/Button/Button";
import utilsStyle from "@/styles/utils.module.css";
import buttonStyle from "@/styles/buttons.module.css";

import { signIn, signOut, useSession } from "next-auth/react";

import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});

/* type NavbarProps = {
  children?: React.ReactNode
} */

export default function Navbar() {
  const { data: session, status: status } = useSession();
  return (
    <nav className={`navCenter`}>
      <Link href="/" className={`Logo ${cairo.className} ${utilsStyle.mL8} `}>
        COZY READER
      </Link>
      <div className={` ${utilsStyle.separateGap} ${utilsStyle.mR22} `}>
        <h5 className={` ${cairo.className}  `}>
          Hello, {session?.user?.name}
        </h5>
        <Button
          className={`${buttonStyle.menuHamburgerButton} ${buttonStyle.menuHamburgerIcon}`}
          onClick={() => signOut()}
        ></Button>
      </div>
    </nav>
  );
}
