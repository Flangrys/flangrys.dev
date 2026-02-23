import {CardComponent} from "../components/CardComponent.tsx";
import {CardsSectionLayout} from "../components/CardsSectionLayout.tsx";

export default function ExperienceView() {
    return (
        <main className="pt-16">
            <CardsSectionLayout
                title={"Experiencias Profesionales"}
                description={"Roles en los cuales participé activamente en el diseño, desarrollo y evolución de sistemas backend, arquitectura y prácticas de confiabilidad."}
            >
                <CardComponent
                    heading={"Grupo Penna"}
                    subheading={"FullStack Software Developer"}
                >
                    <p>
                        Desarrollé de herramientas internas para operaciones logísticas,
                        enfocadas en la recopilación, validación y procesamiento de datos críticos del negocio.
                        Participé en el diseño de APIs, decisiones de arquitectura y mejoras de observabilidad
                        en sistemas en producción.
                    </p>

                    <CardComponent.List items={[
                        "Diseño e implementación de APIs backend con Python y FastAPI.",
                        "Integración de múltiples fuentes de datos (DB, Excel, servicios externos).",
                        "Implementación de logging estructurado, métricas y monitoreo.",
                        "Contenerización y despliegue con Docker y Kubernetes.",
                        "Colaboración directa con equipos técnicos y áreas del negocio."
                    ]}/>

                    <CardComponent.Duration
                        from={new Date("2025/09/01")}
                        to={new Date("2026/01/01")}
                    />
                </CardComponent>


                <CardComponent
                    heading={"Instituto Nacional de Tecnología Agropecuaria"}
                    subheading={"FullStack Software Engineer"}
                >
                    <p>
                        Lideré el desarrollo de Agroestim, una aplicación web
                        orientada a la estimación del rendimiento de cultivos de trigo,
                        trabajando end-to-end desde la arquitectura hasta la interfaz de usuario.
                    </p>


                    <CardComponent.List items={[
                        "Planificación y liderazgo técnico del proyecto.",
                        "Backend con Python, Django y GraphQL.",
                        "Diseño de arquitectura segura y escalable.",
                        "Monitoreo y métricas con Prometheus y Grafana.",
                        "Frontend en React y Tailwind CSS con componentes reutilizables."
                    ]}/>

                    <CardComponent.Duration
                        from={new Date("2023/08/01")}
                        to={new Date("2023/12/01")}
                    />
                </CardComponent>
            </CardsSectionLayout>
        </main>
    )
}
