import React from "react";
import CloseButton from "./close-button";
import { SignUpPopupProps } from "../types/types";

import utilsStyle from "../../styles/utils.module.css";
import popupStyle from "./popup.module.css";

import { Inter } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const inter: NextFont = Inter({
  subsets: ["latin"],
  display: "swap",
});

const SignUpPopup: React.FC<SignUpPopupProps> = ({ handleClose }) => {
  return (
    <div className={`${popupStyle.signUpContainer}`}>
      <div className={`${popupStyle.row}`}>
        <h2 className={`${inter.className} ${popupStyle.SignTitle}`}>
          Sign Up
        </h2>
        <CloseButton
          onClick={handleClose}
        />
        <form  method="post"></form>
      </div>
    </div>
  );
};

export default SignUpPopup;
