"use client"

import Link from "next/link";
import Image from "next/image";

import utilsStyle from "@/styles/utils.module.css";
import popupStyle from "./CredentialsPopup/popup.module.css";
import buttonStyle from "@/styles/buttons.module.css";


import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});

import { signIn, signOut, useSession } from "next-auth/react";

import { CredentialPopup } from "./CredentialsPopup/CredentialPopup";
import { Button } from "./Button/Button";


export default function Navbar() {
  const {data: session } = useSession();
  return (
    <nav className={`navCenter`}>
      <Link href="/" className={`Logo ${cairo.className} ${utilsStyle.mL8} `}>
        COZY READER
      </Link>
      <div className={` ${utilsStyle.separateGap} ${utilsStyle.mR22} `}>
        {session ? (
          <></>
        ) : (
          <>
            <CredentialPopup
              title="Log In"
              isLoginButton={true}
            ></CredentialPopup>
            <CredentialPopup
              title="Sign Up"
              isLoginButton={false}
            >
              <div  className={`${popupStyle.row} ${popupStyle.oauthRow}`}>
                <Button className={`${buttonStyle.iconButton} ${buttonStyle.gitHubIcon}`}
                onClick={() => signIn("github")}
                ></Button>
              </div>
            </CredentialPopup>
          </>
        )}
      </div>
    </nav>
  );
}
