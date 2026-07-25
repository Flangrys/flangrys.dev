import {SectionTitleComponent} from "./SectionTitleComponent.tsx";
import {experience, type ExperienceType} from "@libs/portfolio.const.ts";

function ExperienceItem(experience: ExperienceType) {
    return (
        <li
            key={experience.role + experience.company}
            className="grid gap-2 md:grid-cols-[0.3fr_1fr] md:gap-8"
        >
            <div className="text-sm text-muted-foreground">{experience.period}</div>
            <div>
                <h3 className="text-lg font-medium text-foreground">
                    {experience.role}{" "}
                    <span className="text-muted-foreground"> @ {experience.company}</span>
                </h3>
                <p className="mt-2 text-base leading-relaxed text-foreground/75">
                    {experience.description}
                </p>
            </div>
        </li>
    );
}

export function ExperiencesSectionComponent() {
    return (
        <section id="experience" className="mx-auto max-w-5xl px-6 py-20">
            <SectionTitleComponent eyebrow="02" title="Experiencia" />
            <ol className="mt-10 space-y-10">
                {experience.map(ExperienceItem)}
            </ol>
        </section>
    );
}