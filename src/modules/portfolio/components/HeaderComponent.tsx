import {GithubContactLink} from "@modules/portfolio/components/links/GithubContactLink.tsx";
import {LinkedinContactLink} from "@modules/portfolio/components/links/LinkedinContactLink.tsx";
import {NavbarLogoLinkComponent} from "@modules/portfolio/components/links/NavbarLogoLink.tsx";

export function HeaderComponent() {
    return (
        <>
            <div className="relative md:static lg:sticky w-full top-0 z-20">
                <header className="absolute md:static lg:sticky section-container backdrop-blur-md z-20">
                    <div
                        className="flex items-center justify-between px-6 py-5 z-25 border-b border-b-[color-mix(in oklab, var(--primary) 12%, transparent)]">
                        <div className="flex justify-center align-middle items-center">
                            <NavbarLogoLinkComponent/>
                        </div>

                        <nav className="flex items-center align-middle gap-6 text-nav">
                            <div className="hidden lg:flex items-center aling-middle gap-6">
                                <a href="#about">Sobre mi</a>
                                <a href="#experience">Experiencia</a>
                                <a href="#projects">Seleccion de proyectos</a>
                                <a href="#contact">Contacto</a>
                            </div>

                            <div className="flex items-center align-middle gap-6">
                                <GithubContactLink/>
                                <LinkedinContactLink/>
                            </div>
                        </nav>
                    </div>
                </header>
            </div>
        </>
    );
}
