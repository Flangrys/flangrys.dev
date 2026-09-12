import {Link} from "react-router";
import SvgArrowLeftIcon from "/src/assets/arrow-left-icon.svg?react"
import ParticlesWaveComponent from "@modules/ui/components/ParticlesWaveComponent.tsx";
import {HeaderComponent} from "@modules/portfolio/components/HeaderComponent.tsx";
import {HelloContactLinkComponent} from "@modules/portfolio/components/links/HelloContactLink.tsx";

export function NotFoundComponent() {
    return (

        <>
            <ParticlesWaveComponent/>

            <HeaderComponent/>

            <main className="container mx-auto max-w-5xl">
                <section id="the-error" className="px-6 h-dvh">
                    <div className="flex flex-col items-center justify-center gap-24 h-full">
                        <div className="flex flex-col flex-wrap">
                            <h1 className="text-foreground">Al parecer este sitio no existe...</h1>
                            <p className="eyebrow">
                                Quizas el sitio que buscas no se encuentre aquí o ha dejo de exsitir.
                            </p>
                            <p className="eyebrow text-muted-foreground">
                                Si crees que se trata de un error no dudes en contactarme :)
                            </p>

                            <div className="flex justify-between text-nav">

                                <Link to="/"
                                      className="group btn px-5 py-3 rounded-full border border-border bg-secondary hover:bg-accent transition-colors focus-visible:ring-4 focus-visible:ring-ring focus-visible:outline-none"
                                >
                                    <span
                                        className="grid shrink-0 place-items-center transition-transform group-hover:translate-x-1"
                                    >
                                        <SvgArrowLeftIcon/>
                                    </span>

                                    <span>
                                        Volver al inicio
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="relative border-t">
                <div className="mx-auto max-w-5xl px-6 py-20">
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <span>© 2026 Francisco M. Prieto Giorgis</span>
                        <HelloContactLinkComponent/>
                    </div>
                </div>
            </footer>
        </>
    );
}