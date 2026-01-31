import type {ReactNode} from "react";
import AppThemeButton from "../components/app/AppThemeButton.tsx";
import {AppNavbar} from "../components/app/AppNavbar.tsx";
import {AppFooter} from "../components/app/AppFooter.tsx";

type BaseLayoutProps = {
    children: ReactNode;
}

export function AppRoot(props: BaseLayoutProps) {
    const {children} = props;

    return (
        <>
            <AppNavbar/>
            <div className="container mx-auto max-w-5xl">
                {children}
            </div>
            <AppThemeButton/>
            <AppFooter/>
        </>
    )
}
