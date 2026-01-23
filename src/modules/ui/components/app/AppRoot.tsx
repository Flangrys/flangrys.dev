import type {ReactNode} from "react";
import AppThemeButton from "./AppThemeButton.tsx";
import {AppNavbar} from "./AppNavbar.tsx";
import Container from "../layout/Container.tsx";

type BaseLayoutProps = {
    children: ReactNode;
}

export function AppRoot(props: BaseLayoutProps) {
    const {children} = props;

    return (
        <>
            <AppNavbar/>
            <Container className="max-w-5xl">
                {children}
            </Container>
            <AppThemeButton/>
        </>
    )
}
