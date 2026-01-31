import Container from "../../ui/components/layout/Container.tsx";
import type {HasChildren} from "../../ui/types/props.interface.ts";

interface ExperienceCardProps extends HasChildren {
    company_name: string;
    company_area: string;
    company_rol: string;
}

interface ExperienceDurationProps {
    from: Date;
    to: Date;
}

interface ExperienceExperiencesProps {
    items: string[];
}

export const IntlDateFormat = new Intl.DateTimeFormat("es-AR", {month: "long", year: "numeric"});

function ExperienceCard(props: ExperienceCardProps) {
    const {children, company_name, company_area, company_rol} = props;

    return (
        <Container className="col-span-2">
            <h3 className="font-medium">{company_name}</h3>
            <h6 className="font-medium">{company_area} · {company_rol}</h6>
            {children}
        </Container>
    )
}


ExperienceCard.Summary = ({children}: HasChildren) => {
    return <p>{children}</p>;
};

ExperienceCard.Duration = (props: ExperienceDurationProps) => {
    const {from, to} = props;

    return <span className="mt-4 block text-sm capitalize">{IntlDateFormat.formatRange(from, to)}</span>
}

ExperienceCard.Experiences = (props: ExperienceExperiencesProps) => {
    const {items} = props;

    return (
        <ul className="mt-4 list-disc list-inside text-sm space-y-1">
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
};

export {ExperienceCard};
