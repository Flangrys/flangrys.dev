import {Route, Router, Switch} from "wouter";
import PortfolioView from "../modules/landing/views/PortfolioView.tsx";
import SiteNotFoundView from "../modules/ui/views/SiteNotFoundView.tsx";
import ProjectsView from "../modules/landing/views/ProjectsView.tsx";
import ProfessionalView from "../modules/landing/views/ProfessionalView.tsx";

const BASE_URL = import.meta.env.BASE_URL;

export function AppRouter() {
    return (
        <Router base={BASE_URL}>
            <Switch>
                <Route path="/" component={PortfolioView}/>

                <Route path="/professional" component={ProfessionalView}/>

                <Route path="/projects" component={ProjectsView}/>

                <Route component={SiteNotFoundView}/>
            </Switch>
        </Router>
    )
}
