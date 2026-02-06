import Container from "../../ui/components/layout/Container.tsx";
import {useThemeContext} from "../../ui/hooks/useThemeContext.ts";
import {LinkComponent} from "../../ui/components/buttons/LinkComponent.tsx";
import SvgRightArrow from "/src/assets/right-arrow.svg?react";
import {ExperienceCard} from "../components/ExperienceCard.tsx";

export default function PortfolioView() {
    const {theme} = useThemeContext();

    const profilePictureTheme = {
        light: "images/flangrys_cute_avatar_light.svg",
        dark: "images/flangrys_cute_avatar_dark.svg"
    }

    return (
        <main>
            <section className="flex place-items-center py-20 h-dvh">
                <div className="grid grid-cols-4 grid-rows-[1fr_auto] gap-2.5 h-max">
                    <div className="col-span-2 header-group flex flex-col place-content-center">
                        <h1>Backend Software Engineer & SRE</h1>
                        <p className="font-sans text-lg">
                            Diseño y desarrollo sistemas backend y APIs escalables,
                            con foco en arquitectura, observabilidad y calidad a largo plazo.
                            Experiencia liderando proyectos end-to-end y trabajando cerca de la infraestructura.
                        </p>
                        <ul className="flex flex-row divide-list-dotted font-sans text-sm">
                            <li><span>Software Engineering</span></li>
                            <li><span>Backend Systems</span></li>
                            <li><span>Architecture</span></li>
                            <li><span>DevOps & SRE</span></li>
                        </ul>
                    </div>

                    <div className="col-span-2 row-span-2 flex place-content-center place-items-center">
                        <img
                            src={profilePictureTheme[theme]}
                            alt="AVATAR_FRANCISCO_PRIETO"
                            className="object-fit h-80 w-80"
                        />
                    </div>

                    <nav className="flex align-middle justify-start gap-4">
                        <LinkComponent to="./professional/projects">Agroestim</LinkComponent>
                        <LinkComponent to="./professional/projects">Wirethread</LinkComponent>
                        <LinkComponent to="./professional/projects"><SvgRightArrow/></LinkComponent>
                    </nav>
                </div>
            </section>

            <section className="grid grid-cols-4 grid-rows-[auto_1fr] gap-4 py-20">
                <Container className="col-span-4 header-group border-b border-x-0">
                    <h3>Experiencia Profesional</h3>
                    <p className="max-w-2xl">
                        Roles en los cuales participé activamente en el diseño, desarrollo y evolución
                        de sistemas backend, arquitectura y prácticas de confiabilidad.
                    </p>
                </Container>

                <ExperienceCard heading="Grupo Penna" subheading="FullStack Software Engineer">
                    <ExperienceCard.Summary>
                        Desarrollo de herramientas internas para operaciones logísticas,
                        enfocadas en la recopilación, validación y procesamiento de datos críticos del negocio.
                        Participé en el diseño de APIs, decisiones de arquitectura y mejoras de observabilidad
                        en sistemas en producción.
                    </ExperienceCard.Summary>
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

                    <ExperienceCard.Duration
                        from={new Date("2023/08/01")}
                        to={new Date("2023/12/01")}
                    />
                </ExperienceCard>
            </section>

            <section className="grid grid-cols-4 grid-rows-[auto_1fr] gap-4 py-20">
                <Container className="col-span-4 header-group border-b border-x-0">
                    <h3>Proyectos Profesionales y Personales</h3>
                    <p className="max-w-2xl">
                        Aquí enumero algunos de los proyectos en los que participé tanto del ambito laboral como
                        personal.
                    </p>
                </Container>

                <ExperienceCard
                    heading={"flangrys.dev"}
                    subheading={"Portfolio web personal"}
                >
                    <ExperienceCard.Summary>TODO:
                    </ExperienceCard.Summary>
                </ExperienceCard>

                <ExperienceCard
                    heading={"Agroestim"}
                    subheading={"Calculadora de rendimiento productivo de oleaginosas."}
                >
                    <ExperienceCard.Summary>TODO:
                    </ExperienceCard.Summary>
                </ExperienceCard>


            </section>
        </main>
    );
}
