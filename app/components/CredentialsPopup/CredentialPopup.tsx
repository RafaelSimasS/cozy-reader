"use client";
import { ReactNode } from "react";

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

type CredentialPopupProps = {
  children?: ReactNode;
  title: string;
};

export function CredentialPopup({
  children,
  title,
}: CredentialPopupProps) {
  return (
    <>
        <div className={`overlay`}>
          <div className={`${popupStyle.signUpContainer}`}>
            <div className={`${popupStyle.rowCenter}`}>
              <h2 className={`${inter.className} ${popupStyle.SignTitle}`}>
                {title}
              </h2>
            </div>
              {children}
          </div>
        </div>
    </>
  );
}
