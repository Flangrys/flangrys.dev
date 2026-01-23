import Container from "../../ui/components/layout/Container.tsx";
import {HeroQuickActions} from "./HeroQuickActions.tsx";
import {Rainbow} from "../../ui/components/Rainbow.tsx";


export function LandingHero() {
    return (
        <section className="grid grid-cols-4 grid-rows-[1fr_auto] gap-2.5">
            <Container className="col-span-2">
                <h1 className="font-serif font-bold text-3xl my-2.5">
                    Backend Engineer & Software Reliability Engineer
                </h1>
                <p className="font-sans text-lg">
                    Soy Francisco Prieto, Ingeniero de Software <Rainbow>FullStack</Rainbow> con +5 años de experiencia
                    profesional,
                </p>
            </Container>
            <Container className="col-span-2 row-span-1">
            </Container>
            <Container className="col-span-4 w-full">
                <nav className="flex align-middle justify-start gap-4">
                    <HeroQuickActions label="Wiretrhead" to="/projects?stack=java?name=wiretrhead"/>
                    <HeroQuickActions label="ISM" to="/projects?stack=go?name=ism-artifact"/>
                    <HeroQuickActions label="IAM" to="/projects?lang=go?name=iam-artifact"/>
                    <HeroQuickActions label="CPM" to="/projects?lang=go?name=cpm-artifact"/>
                </nav>
            </Container>
        </section>
    )
}
