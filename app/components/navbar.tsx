import Link from "next/link";

import {
  ButtonSign,
  LoginButton,
  LogoutButton,
  ProfileButton,
  RegisterButton,
} from "./buttons.component";

import utilsStyle from "../../styles/utils.module.css";

import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});

import { authOptions } from "../api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
export default async function Navbar() {
  const session = await getServerSession(authOptions);
  return (
    <nav className={`navCenter`}>
      <Link href="/" className={`Logo ${cairo.className} ${utilsStyle.mL8} `}>
        COZY READER
      </Link>
      <div className={` ${utilsStyle.separateGap} ${utilsStyle.mR22} `}>
        {/* <ButtonSign isSignUp={true} />
        <ButtonSign isSignUp={false} /> */}
        {session ? (
          <LogoutButton />
          ) : (
            <>
            <LoginButton />
            <RegisterButton />
          </>
        )}
      </div>
      <img src="/github.svg" />
    </nav>
  );
}
