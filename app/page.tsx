"use client";
import Navbar from "@/app/components/navbar";
import { LoadingFrame } from "@/app/components/LoadingFrame/Loading";
import { CredentialPopup } from "@/app/components/CredentialsPopup/CredentialPopup";
import { Button } from "@/app/components/Button/Button";

import popupStyle from "@/app/components/CredentialsPopup/popup.module.css";
import buttonStyle from "@/styles/buttons.module.css";

import { signIn, signOut, useSession } from "next-auth/react";

import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});
export default function Home() {
  const { data: session, status: status } = useSession();

  return (
    <>
      <head>
        <title>Home</title>
      </head>

      {status === "loading" && (
        <LoadingFrame>
          <h1 className={cairo.className}>Loading Resources</h1>
        </LoadingFrame>
      )}
      {status === "unauthenticated" && (
        <>
          <CredentialPopup title="Sign Up With">
            <div className={`${popupStyle.row} ${popupStyle.oauthRow}`}>
              <Button
                className={`${buttonStyle.iconButton} ${buttonStyle.gitHubIcon}`}
                onClick={() => signIn("github")}
              />
              <Button
                className={`${buttonStyle.iconButton} ${buttonStyle.googleIcon}`}
                onClick={() => signIn("google")}
              />
            </div>
          </CredentialPopup>
        </>
      )}
      {status === "authenticated" && (
        <>
          <Navbar />
          <main>
            {/* acho que vou colocar a pagina aqui ou fazer um componente externo */}
          </main>
        </>
      )}
    </>
  );
}
