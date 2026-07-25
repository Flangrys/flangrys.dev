import {BrowserRouter, Route, Routes} from "react-router";
import {NotFoundComponent} from "../modules/ui/components/NotFoundComponent.tsx";
import PortfolioView from "../modules/portfolio/views/PortfolioView.tsx";

const BASE_URL = import.meta.env.BASE_URL;

export default function AppRouter() {
    return (
        <BrowserRouter basename={BASE_URL}>
            <Routes>
                <Route index element={<PortfolioView/>}/>
                <Route path="*" element={<NotFoundComponent/>}/>
            </Routes>
        </BrowserRouter>
    )
}