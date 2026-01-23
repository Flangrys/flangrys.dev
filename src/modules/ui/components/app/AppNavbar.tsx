import { Button } from "../buttons/Button.tsx";
import {NavButton} from "../buttons/NavButton.tsx";
import {Link, useLocation} from "wouter";

export function AppNavbar() {
    const [location] = useLocation();

    return (
        <div className="w-full fixed top z-10">
            <header className="p-4 shadow-lg">
                <div
                    className="flex flex-row justify-between place-content-center w-full max-w-7xl mx-auto"
                >
                    <Link to="/" className="font-serif font-bold text-3xl px-4">Flangrys</Link>

                    <nav className="flex gap-4">
                        <NavButton to={"/professional/profile"} location={location}>Perfil Técnico</NavButton>
                        <NavButton to={"/professional/experiences"} location={location}>Experiencias</NavButton>
                        <NavButton to={"/professional/contact"} location={location}>Contacto</NavButton>
                        <NavButton to={"/opensource/projects"} location={location}>Proyectos</NavButton>
                    </nav>

                    <Button>Curriculum</Button>
                </div>
            </header>
        </div>
    )
}
