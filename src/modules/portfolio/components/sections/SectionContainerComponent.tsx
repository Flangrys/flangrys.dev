import type {PropsWithChildren} from "react";

interface SectionContainerProps {
    id: string;
}

export function SectionContainerComponent({children, id}: PropsWithChildren<SectionContainerProps>) {
    return (
        <section id={id} className="px-6 py-20">
            {children}
        </section>
    )
}