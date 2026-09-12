import SVGArrowUpRightIcon from "/src/assets/arrow-up-right-icon.svg?react";
import {SectionTitleComponent} from "./SectionTitleComponent.tsx";
import {SectionContainerComponent} from "@modules/portfolio/components/sections/SectionContainerComponent.tsx";
import {projects} from "@libs/portfolio.const.ts";
import type {ProjectType} from "@libs/portfolio.types.ts";


function ProjectItemLink(props: { url?: string }) {
    const classes = {
        enabled: "text-secondary bg-primary hover:bg-accent group-hover:bg-accent group-hover:scale-105",
        disabled: "text-muted-foreground bg-muted cursor-not-allowed"
    }

    return (
        <a href={props.url}
           rel={props.url}
           target={props.url ? "_blank" : undefined}
           className={
               `flex items-center justify-center p-2 rounded-full transition-all ${props.url ? classes.enabled : classes.disabled}`
           }
        >
            <SVGArrowUpRightIcon className="size-8 lg:size-4"/>
        </a>
    )
}

function ProjectItem(project: ProjectType, i: number) {
    return (
        <div key={project.name + i}
             className="group relative block overflow-hidden rounded-2xl p-6 transition-all"
             style={{
                 border: "1px solid color-mix(in oklab, var(--primary) 16%, transparent)",
                 background: "color-mix(in oklab, var(--primary) 3%, var(--background))",
             }}
        >
            <div className="flex flex-col justify-between h-full">
                <div className="flex flex-col items-start justify-between gap-4">
                    <div className="flex items-center justify-between w-full border-b-2 border-border *:mb-2">
                        <h4 className="text-foreground">{project.name}</h4>
                        <span
                            className="text-base md:text-sm lg:text-xs font-mono text-muted-foreground">{project.year}</span>
                    </div>
                    <p className="mt-2 text-foreground/75">{project.tagline}</p>
                </div>

                <div className="mt-4 flex items-center justify-between">
                    <ul className="flex flex-wrap gap-x-3 gap-y-1 text-lg md:text-sm lg:text-xs text-muted-foreground">
                        {project.stack.map(stack => <li key={stack}>{stack}</li>)}
                    </ul>

                    <ProjectItemLink url={project.url}/>
                </div>
            </div>
        </div>
    );
}

export function ProjectsSectionComponent() {
    return (
        <SectionContainerComponent id="projects">
            <SectionTitleComponent eyebrow="03" title="Proyectos seleccionados"/>
            <p className="mb-10 eyebrow text-muted-foreground">
                Cada proyecto vive en su propio sitio. Hacé click para abrirlo en una nueva pestaña.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 grid-flow-row gap-4">
                {projects.map(ProjectItem)}
            </div>
        </SectionContainerComponent>
    );
}