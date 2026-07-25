import {SectionTitleComponent} from "./SectionTitleComponent.tsx";

export function AboutSectionComponent() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-20">
            <SectionTitleComponent eyebrow="01" title="Sobre mí"/>
            <div className="mt-10 grid gap-8 text-base leading-relaxed text-foreground/80 md:grid-cols-2 md:text-lg">
                <p>
                    Acompaño al desarollo y crecimiento de los negocios traduciendo desafíos técnicos complejos en
                    sistemas accesibles, confiables y escalables, acelerando la entrega de nuevas funcionalidades y
                    reduciendo la complejidad técnica de los procesos.
                </p>
                <p>
                    Mi trabajo combina experiencia en desarrollo de software, arquitectura en sistemas y automatización
                    de infraestructura para diseñar sistemas mantenibles, observables y preparados para evolucionar
                    junto con las necesidades de la organización.
                </p>
            </div>
        </section>
    );
}