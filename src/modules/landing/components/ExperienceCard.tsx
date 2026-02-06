import type {PropsWithChildren} from "react";

interface CardProps {
    heading: string;
    subheading: string;
}

interface DurationProps {
    from: Date;
    to: Date;
}

interface CardListProps {
    items: string[];
}

export const IntlDateFormat = new Intl.DateTimeFormat("es-AR", {month: "long", year: "numeric"});

function ExperienceCard(props: PropsWithChildren<CardProps>) {
    const {children, heading, subheading} = props;

    return (
        <div className="col-span-full bg-transparent rounded">
            <div className="px-8 py-4 header-group">
                <h3 className="font-medium">{heading}</h3>
                <h5 className="font-medium">{subheading}</h5>
                {children}
            </div>
        </div>
    )
}


ExperienceCard.Summary = ({children}: { children: string; }) => {
    return <p>{children}</p>;
};

ExperienceCard.Duration = (props: DurationProps) => {
    const {from, to} = props;

    return <span>{IntlDateFormat.formatRange(from, to)}</span>
}

ExperienceCard.Experiences = (props: CardListProps) => {
    const {items} = props;

    return (
        <ul className="pb-4 list-disc list-inside text-sm space-y-1">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
};

export {ExperienceCard};
