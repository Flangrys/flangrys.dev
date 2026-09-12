import {LinkedinContactLink} from "../links/LinkedinContactLink.tsx";
import {GithubContactLink} from "../links/GithubContactLink.tsx";
import {EmailContactLink} from "../links/EmailContactLink.tsx";
import {HeroProfileComponent} from "../hero/HeroProfileComponent.tsx";
import {HeroScrollDownLinkComponent} from "@modules/portfolio/components/links/HeroScrollDownLink.tsx";

export function HeroSectionComponent() {

    return (
        <section id="hero" className="px-6 h-dvh">
            <div className="flex flex-col items-center justify-center gap-24 h-full">
                <div className="flex flex-col lg:flex-row gap-10 lg:items-center">

                    <div
                        role="img"
                        aria-label="PROFILE_PICTURE_PLACEHOLDER"
                        className="relative size-70 md:size-65 lg:size-60 shrink-0 overflow-hidden rounded-full border border-border bg-linear-to-br from-primary/15 via-accent/10 to-primary/5"
                    >
                        <div className="absolute inset-0 flex items-center justify-center">
                            <HeroProfileComponent/>
                        </div>

                        <div
                            className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-primary/10"/>
                    </div>

                    <div>
                        <p className="eyebrow uppercase leading-[1.05] tracking-widest text-primary">Cordoba, Argentina</p>

                        <h1>Soy Francisco Matias</h1>

                        <p className="subtitle text-muted-foreground">
                            Ingeniero de Software <span className="italic">Full Stack</span>
                        </p>

                        <p className="leading-relaxed text-foreground/80">
                            Ingeniero de Software Full Stack, con foco en Backend y con experiencia en el sector
                            logístico y agrícola. Lidero el diseño y desarrollo de soluciones end-to-end, escalables y de
                            alto rendimiento.
                        </p>

                        <div className="mt-10 w-full">
                            <nav className="flex flex-row items-center gap-4 *:pe-4 divide-x-2 divide-solid divide-border text-nav">
                                <EmailContactLink/>
                                <LinkedinContactLink/>
                                <GithubContactLink/>
                            </nav>
                        </div>
                    </div>
                </div>
                <HeroScrollDownLinkComponent/>
            </div>
        </section>
    );
}