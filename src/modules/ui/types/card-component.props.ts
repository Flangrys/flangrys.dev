import type {MouseEventHandler} from "react";

export interface CardProps {
    heading: string;
    subheading: string;

    onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface DurationProps {
    from: Date;
    to: Date;
}

export interface CardListProps {
    items: string[];
}
