import {SectionTitleComponent} from "./SectionTitleComponent.tsx";
import {SectionContainerComponent} from "@modules/portfolio/components/sections/SectionContainerComponent.tsx";

export function AboutSectionComponent() {
    return (
        <SectionContainerComponent id="about">
            <SectionTitleComponent eyebrow="01" title="Sobre mí"/>
            <article className="flex flex-wrap text-foreground/80">
                <p>
                    He acompañado el crecimiento de las empresas traduciendo las necesidades técnicas en sistemas
                    resilientes, fiables y escalables; alineados al contexto y las estrategias del negocio.
                </p>

                <p>
                    Me enfoco en producir <b>resultados reales</b>, con <b>procedimientos transparentes</b>, y <b>
                    decisiones estratégicas consistentes</b>. Vendo soluciones que mueven las metricas del negocio,
                    con plazos realistas, bien documentados, y con soporte extendido.
                </p>
            </article>
        </SectionContainerComponent>
    );
}