import Container from "../../ui/components/layout/Container.tsx";
import {LinkComponent} from "../../ui/components/buttons/LinkComponent.tsx";
import {useThemeContext} from "../../ui/hooks/useThemeContext.ts";


export function LandingSection() {
    const {theme} = useThemeContext();

    const profilePictureTheme = {
        light: "/public/images/flangrys_cute_avatar_light.svg",
        dark: "/public/images/flangrys_cute_avatar_dark.svg"
    }

    return (
        <section className="grid grid-cols-4 grid-rows-[1fr_auto] gap-2.5 py-20">
            <Container className="col-span-2 header-group">
                <h1>Software Engineer · Backend & SRE</h1>
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
            </Container>

            <Container className="col-span-2 row-span-2 flex place-content-center place-items-center">
                <img
                    src={profilePictureTheme[theme]}
                    alt="AVATAR_OF_FRANCISCO_PRIETO"
                    className="object-fit h-80 w-80"
                />
            </Container>

            <Container className="col-span-2 w-full">
                <nav className="flex align-middle justify-start gap-4">
                    <LinkComponent to="/projects">Agroestim</LinkComponent>
                    <LinkComponent to="/projects">Wirethread</LinkComponent>
                    <LinkComponent to="/projects">IAM/A</LinkComponent>
                </nav>
            </Container>
        </section>
    )
}
