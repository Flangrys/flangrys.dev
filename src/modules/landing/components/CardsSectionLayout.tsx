import Container from "../../ui/components/layout/Container.tsx";
import type {PropsWithChildren} from "react";

interface CardsSectionProps {
    title: string;
    description: string;
}

export function CardsSectionLayout(props: PropsWithChildren<CardsSectionProps>) {
    const {title, description, children} = props;

    return (
        <section className="grid grid-cols-4 grid-rows-[auto_1fr] gap-4 py-20">
            <Container className="col-span-4 header-group">
                <h3>{title}</h3>
                <p className="max-w-2xl">{description}</p>
            </Container>

            {children}
        </section>
    )
}
