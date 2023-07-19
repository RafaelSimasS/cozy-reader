import Link from "next/link";

import utilsStyle from "../../styles/utils.module.css";

import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});

import { CredentialPopup } from "./CredentialsPopup/CredentialPopup";
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
            ></CredentialPopup>
          </>
        )}
      </div>
    </nav>
  );
}
