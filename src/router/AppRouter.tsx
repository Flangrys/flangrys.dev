import {BrowserRouter, Route, Routes} from "react-router";
import {NotFoundComponent} from "../modules/ui/components/NotFoundComponent.tsx";
import PortfolioView from "../modules/portfolio/views/PortfolioView.tsx";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<PortfolioView/>}/>
                <Route path="*" element={<NotFoundComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}