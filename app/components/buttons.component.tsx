"use client";
import { ButtonSignProps } from "../types/types";
import SignUpPopup from "./signup-popup";
import LogInPopup from "./login-popup";

import React, { useState } from "react";

import buttonStyle from "./buttons.module.css";

import { Cairo } from "next/font/google";
import { NextFont } from "next/dist/compiled/@next/font";
const cairo: NextFont = Cairo({
  subsets: ["latin"],
  display: "swap",
});

export const ButtonSign: React.FC<ButtonSignProps> = ({ isSignUp }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handleClick = () => {
    setShowPopup(true);
  };
  const handleClose = () => {
    setShowPopup(false);
  };
  return (
    <>
      <button
        className={`${buttonStyle.buttonSign} ${cairo.className} `}
        onClick={handleClick}
      >
        {isSignUp ? "Sign Up" : "Log In"}
      </button>
      {showPopup && (
        <div className={`overlay`}>
          {isSignUp ? (
            <SignUpPopup handleClose={handleClose} />
          ) : (
            <LogInPopup handleClose={handleClose} />
          )}
        </div>
      )}
    </>
  );
};


import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button className={`${buttonStyle.buttonSign} ${cairo.className} `} onClick={() => signIn()}>
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  const handleClick = () => {
    window.location.href ='/api/auth/signin'
  }
  return (
    <button className={`${buttonStyle.buttonSign} ${cairo.className} `} onClick={handleClick} >
      Sign Up
    </button>
  );
};

export const LogoutButton = () => {
  return (
    <button className={`${buttonStyle.buttonSign} ${cairo.className} `} onClick={() => signOut()}>
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
