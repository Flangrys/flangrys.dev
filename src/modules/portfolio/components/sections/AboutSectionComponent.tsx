import {SectionTitleComponent} from "./SectionTitleComponent.tsx";
import {SectionContainerComponent} from "@modules/portfolio/components/sections/SectionContainerComponent.tsx";

export function AboutSectionComponent() {
    return (
        <SectionContainerComponent id="about">
            <SectionTitleComponent eyebrow="01" title="Sobre mí"/>
            <div className="flex flex-wrap gap-8 text-foreground/80 md:grid-cols-2">
                <p>
                    A lo largo de mi carrera he acompañado el desarrollo y crecimiento de los negocios traduciendo
                    desafíos técnicos complejos en sistemas resilientes, confiables y escalables; implementando procesos
                    de CI/CD, entregando funcionalidades en menor tiempo.
                </p>
            </div>
        </SectionContainerComponent>
    );
}