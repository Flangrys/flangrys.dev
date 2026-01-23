import {Link} from "wouter";
import type {LinkButtonProps} from "../../types/components.interface.ts";

export function LinkButton(props: LinkButtonProps) {
    const {to, children} = props;

    return (
        <Link to={to} className="px-4 py-2 outline rounded-2xl">
            <div className="text-lg uppercase light:text-gray-100 dark:text-gray-100 font-sans">
                {children}
            </div>
        </Link>
    )
}
