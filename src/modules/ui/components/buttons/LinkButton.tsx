import {Link} from "wouter";
import type {LinkProps} from "../../types/props.interface.ts";

export function LinkButton(props: LinkProps) {
    const {to, children} = props;


    return (
        <Link to={to} className="px-4 py-2 outline rounded-2xl">
            <div className="text-lg uppercase font-sans">
                {children}
            </div>
        </Link>
    )
}
