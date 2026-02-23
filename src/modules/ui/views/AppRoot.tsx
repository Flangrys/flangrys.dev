import type {ReactNode} from "react";
import AppThemeButton from "../components/app/AppThemeButton.tsx";
import AppNavbar from "../components/app/AppNavbar.tsx";
import {AppFooter} from "../components/app/AppFooter.tsx";
import Container from "../components/layout/Container.tsx";
import {useThemeContext} from "../hooks/useThemeContext.ts";

type BaseLayoutProps = {
    children: ReactNode;
}

export function AppRoot(props: BaseLayoutProps) {
    const {children} = props;
    const {theme} = useThemeContext();

    const containerClassTheme = {
        light: "bg-linear-to-tr from-indigo-100 via-5% to-violet-100",
        dark: "bg-linear-to-br from-indigo-950/15 to-violet-900/15"
    }

    return (
        <div className={`min-h-dvh ${containerClassTheme[theme]}`}>
            <AppNavbar/>
            <Container className="max-w-5xl">
                {children}
            </Container>
            <AppThemeButton/>
            <AppFooter/>
        </div>
    )
}
