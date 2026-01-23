import type {ButtonProps} from "../../types/components.interface.ts";

export function Button(props: ButtonProps) {
    const {children} = props;

    return (
        <button
            className="px-4 py-2 outline rounded-full hover:bg-indigo-400 dark:hover:bg-gray-800 hover:outline-indigo-400 dark:hover:outline-gray-800 transition-colors">
            <div className="text-lg uppercase light:text-gray-100 dark:text-gray-100 font-sans">
                {children}
            </div>
        </button>
    )
}
