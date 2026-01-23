import {Route, Router, Switch} from "wouter";
import PortfolioView from "../modules/landing/views/PortfolioView.tsx";
import SiteNotFoundView from "../modules/ui/views/SiteNotFoundView.tsx";
import ProjectsView from "../modules/landing/views/ProjectsView.tsx";

export function AppRouter() {
    return (
        <Router>
            <Switch>
                <Route path="/" component={PortfolioView}/>

                {/*<Route path="/professional" component={}/>*/}

                <Route path="/projects/" component={ProjectsView}/>

                <Route component={SiteNotFoundView}/>
            </Switch>
        </Router>
    )
}
