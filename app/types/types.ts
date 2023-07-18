import { CSSProperties } from "react";

export type ButtonSignProps = {
    isSignUp: boolean
};



export type CloseButtonProps = {
    onClick: () => void,
    style?: CSSProperties;
}


export type SignUpPopupProps = {
    handleClose: () => void;
}

export type LogInPopupProps = {
    handleClose: () => void;
}