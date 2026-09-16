import {SectionTitleComponent} from "./SectionTitleComponent.tsx";
import {experience} from "@libs/portfolio.const.ts";
import {SectionContainerComponent} from "@modules/portfolio/components/sections/SectionContainerComponent.tsx";
import type {ExperienceType} from "@libs/portfolio.types.ts";

function ExperienceItem(experience: ExperienceType) {
    return (
        <li
            key={experience.role + experience.company}
            className="flex flex-col flex-wrap lg:flex-nowrap lg:flex-row gap-2 lg:gap-8 border-b-2 border-border"
        >
            <p className="flex-2/5 eyebrow text-muted-foreground">{experience.period}</p>

            <div className="basis-full">
                <h4 className="text-foreground">
                    {experience.role}
                    <span className="text-muted-foreground">
                        {" "} @ {experience.company}
                    </span>
                </h4>
            </div>
        </li>
    );
}

export function ExperiencesSectionComponent() {
    return (
        <SectionContainerComponent id="experience">
            <SectionTitleComponent eyebrow="02" title="Experiencia"/>
            <div className="mt-10">
                <ol className="space-y-10">
                    {experience.map(ExperienceItem)}
                </ol>
            </div>
        </SectionContainerComponent>
    );
}