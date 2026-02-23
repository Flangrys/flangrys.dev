import type {MouseEvent} from "react";
import {LinkComponent} from "../../ui/components/buttons/LinkComponent.tsx";
import SvgRightArrow from "/src/assets/right-arrow.svg?react";
import {CardComponent} from "../components/CardComponent.tsx";
import {ButtonComponent} from "../../ui/components/buttons/ButtonComponent.tsx";
import SvgChevronDown from "/src/assets/chevron-down.svg?react";
import {CardsSectionLayout} from "../components/CardsSectionLayout.tsx";
import {useThemedClasses} from "../../ui/hooks/useThemedClasses.ts";
import {BubbleComponent} from "../components/BubbleComponent.tsx";
import {TagComponent} from "../components/TagComponent.tsx";

export default function PortfolioView() {
    const themedClasses = useThemedClasses({
        picture: {light: "images/flangrys_cute_avatar_light.svg", dark: "images/flangrys_cute_avatar_dark.svg"},
        grayscale: {light: "text-slate-400", dark: "text-slate-600"},
        colorful: {light: "text-indigo-400", dark: "text-indigo-500"}
    });

    function handleScroll(e: MouseEvent<HTMLButtonElement>) {
        e.preventDefault();

        const section = document.querySelector("section:nth-child(2)") as HTMLElement;

        window.scrollTo({top: section.offsetTop});
    }

    return (
        <main>
            <section className="flex flex-col place-content-center place-items-center py-20 h-dvh">
                <div className="grid grid-cols-6 grid-rows-[1fr_auto] gap-2.5 h-max">
                    <div className="col-span-4 header-group flex flex-col place-content-center">

                        <h4 className={themedClasses.grayscale}>Hola! Soy</h4>
                        <h1>Francisco Matias Prieto Giorgis</h1>
                        <h2>
                            <span className={themedClasses.grayscale}>Backend</span>{" "}
                            <span className={themedClasses.colorful}>Software Engineer</span>
                        </h2>

                        <p className="font-sans text-lg">
                            Diseño y desarrollo sistemas backend y APIs escalables,
                            con foco en arquitectura, observabilidad y calidad a largo plazo.
                            Experiencia liderando proyectos end-to-end y trabajando cerca de la infraestructura.
                        </p>

                        <BubbleComponent color="indigo"><span>Abierto a oportunidades</span></BubbleComponent>
                    </div>

                    <div className="col-span-2 row-span-2 flex place-content-center place-items-center">
                        <img
                            src={themedClasses.picture}
                            alt="AVATAR_FRANCISCO_PRIETO"
                            className="object-fit h-80 w-80"
                        />
                    </div>

                    <nav className="flex align-middle justify-start gap-4">
                        <LinkComponent to="./projects">Agroestim</LinkComponent>
                        <LinkComponent to="./projects">Wirethread</LinkComponent>
                        <LinkComponent to="./projects"><SvgRightArrow/></LinkComponent>
                    </nav>
                </div>

                <div className="pt-4">
                    <ButtonComponent onClick={handleScroll}>
                        <SvgChevronDown/>
                    </ButtonComponent>
                </div>
            </section>

            <CardsSectionLayout
                title={"Experiencia Profesional"}
                description={"Aquí enumero todo los puestos en los cuales participé activamente en el diseño, desarrollo y evolución de sistemas, arquitectura y prácticas de confiabilidad."}
            >
                <CardComponent
                    heading="Grupo Penna"
                    subheading="FullStack Software Engineer"
                >
                    <p>
                        Desarrollé de herramientas internas para operaciones logísticas,
                        enfocadas en la recopilación, validación y procesamiento de datos críticos del negocio.
                        Participé en el diseño de APIs, decisiones de arquitectura y mejoras de observabilidad
                        en sistemas en producción.
                    </p>

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
                        orientada a la estimación del rendimiento de cultivos de oleaginosas,
                        trabajando end-to-end desde la arquitectura hasta la interfaz de usuario.
                    </p>

                    <CardComponent.Duration
                        from={new Date("2023/08/01")}
                        to={new Date("2023/12/01")}
                    />
                </CardComponent>
            </CardsSectionLayout>

            <CardsSectionLayout
                title={"Proyectos Personales y Profesionales"}
                description={"Aquí enumero algunos de los proyectos en los que participé tanto del ambito laboral como personal."}
            >
                <CardComponent
                    heading={"flangrys.dev"}
                    subheading={"Portfolio web"}
                >
                    <p>
                        Que ironico ver que mi portafolio esta incluido en mi portafolio. ¿Recursivo verdad?
                        Este portfolio no solo se ocupa para centralizar mis proyectos, sino que también me permite
                        experimentar con nuevos conceptos y tecnologías, al mismo tiempo que me permite desenvolverme
                        de forma natural y transparente.
                    </p>

                    <div className="flex flex-row gap-2 place-items-center">
                        <TagComponent>React</TagComponent>
                        <TagComponent>Typescript</TagComponent>
                        <TagComponent>Tailwindcss</TagComponent>
                        <TagComponent>Github</TagComponent>
                        <TagComponent>Cloudflare</TagComponent>
                    </div>
                </CardComponent>

                <CardComponent heading={"Wirethread"}
                               subheading={"High-performance, open-source Minecraft server software"}>
                    <p>
                        Wirethread es una implementacion de codigo abierto para los servidor de Minecraft;
                        desarrollado en <code className="code">Java</code> pensado para rendir al máximo, escalar de
                        forma sencilla y extender facilmente las capacidades con soporte para <code
                        className="code">Plugis</code> con una <code className="code">API</code>{" "}
                        sencilla de usar.
                    </p>
                    <p>
                        Este proyecto esta en constante evolución y cuenta con un programa para extender el
                        soporte a diferentes plataformas, ademas de proveer una mejor experiencia tanto para los
                        desarrolladores como para los jugadores.
                    </p>

                    <div className="flex flex-row gap-2 place-items-center">
                        <TagComponent>Java</TagComponent>
                        <TagComponent>Plugins</TagComponent>
                        <TagComponent>Minecraft</TagComponent>
                        <TagComponent>Open Source</TagComponent>
                    </div>
                </CardComponent>

                <CardComponent
                    heading={"Agroestim"}
                    subheading={"Software de gestion agrícola"}
                >
                    <p>
                        Agroestim es un proyecto inicialmente pensado para una feria de ciencias que luego fué extendido
                        para ser un software completo de gestion agrícola. Pensado para el productor y en colaboración
                        con
                        el Instituto Nacional de Tecnología Agropecuaria, fue desarrollada esta herramienta que permite
                        estimar el rendimiento productivo de cultivos de oleaginosas contrastando por medio de
                        información regional provista por el INTA.
                    </p>

                    <div className="flex flex-row gap-2 place-items-center">
                        <TagComponent>React</TagComponent>
                        <TagComponent>Typescript</TagComponent>
                        <TagComponent>Django</TagComponent>
                        <TagComponent>Graphql</TagComponent>
                        <TagComponent>Python</TagComponent>
                        <TagComponent>AWS</TagComponent>
                        <TagComponent>Serverless</TagComponent>
                    </div>
                </CardComponent>
            </CardsSectionLayout>
        </main>
    );
}
