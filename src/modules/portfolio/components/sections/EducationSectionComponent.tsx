import {SectionContainerComponent} from "@modules/portfolio/components/sections/SectionContainerComponent.tsx";
import {SectionTitleComponent} from "@modules/portfolio/components/sections/SectionTitleComponent.tsx";
import {education} from "@libs/portfolio.const.ts";
import type {EducationType} from "@libs/portfolio.types.ts";

function EducationItem(education: EducationType, index: number) {
    return (
        <li key={index}
            className="flex flex-col flex-wrap lg:flex-nowrap lg:flex-row justify-between border-b-2 border-border">
            <h4 className="text-foreground">{education.degree}</h4>
            <p className="text-foreground/75">{education.institution}</p>
        </li>
    )
}

export function EducationSectionComponent() {
    return (
        <SectionContainerComponent id="education">
            <SectionTitleComponent eyebrow="05" title="Educación"/>
            <div className="mt-10">
                <ol className="space-y-10">
                    {education.map(EducationItem)}
                </ol>
            </div>
        </SectionContainerComponent>
    );
}
