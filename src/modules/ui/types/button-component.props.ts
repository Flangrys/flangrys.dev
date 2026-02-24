import type {ButtonHTMLAttributes, PropsWithChildren } from "react";

type ButtonVariant = "default" | "success" | "info" | "warning" | "error" | "accent";

export interface ButtonProps extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    variant?: ButtonVariant;
}
