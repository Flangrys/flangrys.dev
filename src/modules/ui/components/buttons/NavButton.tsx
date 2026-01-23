import {Link} from "wouter";
import type {NavButtonProps} from "../../types/components.interface.ts";

export function NavButton(props: NavButtonProps) {
    const {to, children} = props;

    return (
        <Link to={to}
              className="px-4 py-2 rounded-2xl hover:outline light:hover:outline-gray-800 dark:hover:outline-gray-200">
            <div className="font-sans text-lg light:text-gray-100 uppercase">
                {children}
            </div>
        </Link>
    )
}
