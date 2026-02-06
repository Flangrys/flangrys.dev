import {Component, type ReactNode} from "react";
import type {KnownBoundaryError} from "../constants/errors.consts.ts";
import SiteOutOfService from "./SiteOutOfService.tsx";
import SiteNotFoundView from "./SiteNotFoundView.tsx";

interface AppErrorBoundaryProps {
    children: ReactNode;
}

interface AppErrorBoundaryState {
    errorType?: KnownBoundaryError;
}

export class AppErrorBoundary extends Component<AppErrorBoundaryProps, AppErrorBoundaryState> {

    constructor(props: AppErrorBoundaryProps) {
        super(props);
        this.state = {};
    }

    static getDerivedStateFromError(error: unknown) {
        if (error instanceof Error) {
            return {errorType: "Error"}
        } else {
            return {errorType: "unknown"};
        }
    }

    componentDidCatch(error: unknown, errorInfo: unknown) {
        console.info("[ERROR BOUNDARY] An error was catch: ", error, errorInfo);
    }

    render() {
        const {errorType} = this.state;

        switch (errorType) {
            case "Error":
                return <SiteOutOfService/>;

            case "unknown":
                return <SiteNotFoundView/>;

            default:
                return this.props.children;
        }
    }
}
