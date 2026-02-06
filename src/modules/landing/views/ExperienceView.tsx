import Container from "../../ui/components/layout/Container.tsx";
import {ExperienceCard} from "../components/ExperienceCard.tsx";

export default function ExperienceView() {
    return (
        <main className="pt-16">
            <section className="grid grid-cols-4 grid-rows-[auto_1fr] gap-4 py-20">
                <Container className="col-span-4 header-group border-b border-x-0">
                    <h3>Experiencia Profesional</h3>
                    <p className="max-w-2xl">
                        Roles en los cuales participé activamente en el diseño, desarrollo y evolución
                        de sistemas backend, arquitectura y prácticas de confiabilidad.
                    </p>
                </Container>

                <ExperienceCard
                    heading={"Grupo Penna"}
                    subheading={"FullStack Software Developer"}
                >
                    <ExperienceCard.Summary>
                        Desarrollo de herramientas internas para operaciones logísticas,
                        enfocadas en la recopilación, validación y procesamiento de datos críticos del negocio.
                        Participé en el diseño de APIs, decisiones de arquitectura y mejoras de observabilidad
                        en sistemas en producción.
                    </ExperienceCard.Summary>

                    <ExperienceCard.Experiences items={[
                        "Diseño e implementación de APIs backend con Python y FastAPI.",
                        "Integración de múltiples fuentes de datos (DB, Excel, servicios externos).",
                        "Implementación de logging estructurado, métricas y monitoreo.",
                        "Contenerización y despliegue con Docker y Kubernetes.",
                        "Colaboración directa con equipos técnicos y áreas del negocio."
                    ]}/>

                    <ExperienceCard.Duration
                        from={new Date("2025/09/01")}
                        to={new Date("2026/01/01")}
                    />
                </ExperienceCard>


                <ExperienceCard
                    heading={"Instituto Nacional de Tecnología Agropecuaria"}
                    subheading={"FullStack Software Engineer"}
                >
                    <ExperienceCard.Summary>
                        Lideré el desarrollo de Agroestim, una aplicación web
                        orientada a la estimación del rendimiento de cultivos de trigo,
                        trabajando end-to-end desde la arquitectura hasta la interfaz de usuario.
                    </ExperienceCard.Summary>


                    <ExperienceCard.Experiences items={[
                        "Planificación y liderazgo técnico del proyecto.",
                        "Backend con Python, Django y GraphQL.",
                        "Diseño de arquitectura segura y escalable.",
                        "Monitoreo y métricas con Prometheus y Grafana.",
                        "Frontend en React y Tailwind CSS con componentes reutilizables."
                    ]}/>

                    <ExperienceCard.Duration
                        from={new Date("2023/08/01")}
                        to={new Date("2023/12/01")}
                    />
                </ExperienceCard>
            </section>
        </main>
    )
}
