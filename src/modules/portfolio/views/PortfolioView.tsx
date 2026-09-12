import ParticlesWaveComponent from "../../ui/components/ParticlesWaveComponent.tsx";
import {HeaderComponent} from "../components/HeaderComponent.tsx";
import {AboutSectionComponent} from "../components/sections/AboutSectionComponent.tsx";
import {HeroSectionComponent} from "../components/sections/HeroSectionComponent.tsx";
import {ProjectsSectionComponent} from "../components/sections/ProjectsSectionComponent.tsx";
import {StackSectionComponent} from "../components/sections/StackSectionComponent.tsx";
import {ExperiencesSectionComponent} from "../components/sections/ExperiencesSectionComponent.tsx";
import {FooterComponent} from "../components/FooterComponent.tsx";
import {EducationSectionComponent} from "@modules/portfolio/components/sections/EducationSectionComponent.tsx";

export default function PortfolioView() {
    return (
        <>
            <ParticlesWaveComponent/>

            <HeaderComponent/>

            <main className="container mx-auto max-w-5xl">
                <HeroSectionComponent/>
                <AboutSectionComponent/>
                <ExperiencesSectionComponent/>
                <ProjectsSectionComponent/>
                <StackSectionComponent/>
                <EducationSectionComponent/>
            </main>

            <FooterComponent/>
        </>
    );
}