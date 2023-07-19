"use client";
import { ReactNode, useState, useRef, useEffect } from "react";

import popupStyle from "./popup.module.css";

import { Inter } from "next/font/google";
import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const inter: NextFont = Inter({
  subsets: ["latin"],
  display: "swap",
});
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});

import { Button } from "@/app/components/Button/Button";
import buttonStyles from "@/styles/buttons.module.css";
import Image from "next/image";

type CredentialPopupProps = {
  children?: ReactNode;
  title: string;
  isLoginButton: boolean;
};

export function CredentialPopup({
  children,
  title,
  isLoginButton,
}: CredentialPopupProps) {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <Button
        className={`${buttonStyles.buttonSign} ${cairo.className} `}
        onClick={handleClick}
      >
        {isLoginButton ? "Log In" : "Sign Up"}
      </Button>
      {showPopup && (
        <div className={`overlay`}>
          <div className={`${popupStyle.signUpContainer}`}>
            <div className={`${popupStyle.row} ${popupStyle.endFlex}`}>
              <h2 className={`${inter.className} ${popupStyle.SignTitle}`}>
                {title}
              </h2>
              <Button
                className={`${buttonStyles.closeButton}`}
                onClick={handleClose}
              >
                <Image
                  src="/icons/close-round.svg"
                  alt="Close"
                  width={21}
                  height={21}
                  className={`${buttonStyles.closeIcon}`}
                />
              </Button>
            </div>
              {children}
          </div>
        </div>
      )}
    </>
  );
}
