import SiteNotFoundView from "../modules/ui/views/SiteNotFoundView.tsx";
import PortfolioView from "../modules/landing/views/PortfolioView.tsx";
import {Route, Routes} from "react-router";
import ExperienceView from "../modules/landing/views/ExperienceView.tsx";
import ProfessionalView from "../modules/landing/views/ProfessionalView.tsx";
import ContactView from "../modules/landing/views/ContactView.tsx";
import ProjectsView from "../modules/landing/views/ProjectsView.tsx";


export function AppRouter() {
    return (
        <Routes>
            <Route index element={<PortfolioView/>}/>

            <Route path="professional">
                <Route index element={<ProfessionalView/>}/>
                <Route path="contact" element={<ContactView/>}/>
                <Route path="projects" element={<ProjectsView/>}/>
                <Route path="experience" element={<ExperienceView/>}/>
            </Route>

            <Route path="*" element={<SiteNotFoundView/>}/>
        </Routes>
    )
}
