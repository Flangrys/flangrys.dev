import SvgFlangrysDotDevDark from "/src/assets/flangrys_dot_dev_dark_favicon.svg?react";
import SvgFlangrysDotDevLight from "/src/assets/flangrys_dot_dev_light_favicon.svg?react";
import {useTheme} from "@modules/ui/hooks/useTheme";
import {GithubContactLink} from "@modules/portfolio/components/links/GithubContactLink.tsx";
import {LinkedinContactLink} from "@modules/portfolio/components/links/LinkedinContactLink.tsx";

export function HeaderLogotypeComponent() {
    const {theme} = useTheme();

    switch (theme) {
        case "dark":
            return <SvgFlangrysDotDevLight/>;
        case "light":
            return <SvgFlangrysDotDevDark/>;
    }
}

export function HeaderComponent() {
    return (
        <header className="sticky top-0 z-20 backdrop-blur-md">
            <div
                className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5"
                style={{
                    borderBottom: "1px solid color-mix(in oklab, var(--primary) 12%, transparent)",
                }}
            >
                <a
                    href="#top"
                    className="text-sm font-semibold tracking-tight text-foreground"
                >
                    <HeaderLogotypeComponent/>
                </a>
                <nav className="flex items-center gap-6 text-sm text-muted-foreground">
                    <a href="#experience" className="transition-colors hover:text-foreground">
                        Sobre mi
                    </a>
                    <a href="#experience" className="transition-colors hover:text-foreground">
                        Experiencia
                    </a>
                    <a href="#work" className="transition-colors hover:text-foreground">
                        Seleccion de proyectos
                    </a>
                    <GithubContactLink/>
                    <LinkedinContactLink/>
                </nav>
            </div>
        </header>
    );
}
