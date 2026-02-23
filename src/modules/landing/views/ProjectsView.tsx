import {CardsSectionLayout} from "../components/CardsSectionLayout.tsx";
import {CardComponent} from "../components/CardComponent.tsx";
import {TagComponent} from "../components/TagComponent.tsx";

export default function ProjectsView() {
    return (
        <main>
            <CardsSectionLayout
                title={"Proyectos"}
                description={"Proyectos personales, opensource, y profesionales; en los que participé de manera activa."}
            >
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
                        Este proyecto esta en constante evolución y cuenta con un programa programa para extender el
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
                        <TagComponent>Cloud</TagComponent>
                    </div>
                </CardComponent>
            </CardsSectionLayout>
        </main>
    )
}
