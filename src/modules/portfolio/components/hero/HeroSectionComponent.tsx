import {profile} from "@libs/portfolio.const.ts";
import {HeroContactComponent} from "./HeroContactComponent.tsx";
import {HeroProfileComponent} from "./HeroProfileComponent.tsx";

export function HeroSectionComponent() {
    return (
        <section id="top" className="mx-auto max-w-5xl px-6 pt-24 pb-20 md:pt-32 md:pb-28">
            <div className="grid gap-12 md:grid-cols-[auto_1fr] md:items-center md:gap-16">

                <HeroProfileComponent/>

                <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-primary">
                        {profile.location}
                    </p>
                    <h1 className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-6xl">
                        {profile.name}
                    </h1>
                    <p className="mt-4 text-xl text-muted-foreground md:text-2xl">
                        {profile.title}
                    </p>
                    <p className="mt-8 max-w-2xl text-base leading-relaxed text-foreground/80 md:text-lg">
                        {profile.summary}
                    </p>

                    <HeroContactComponent/>
                </div>
            </div>
        </section>
    );
}