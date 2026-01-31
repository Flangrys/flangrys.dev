import {ButtonComponent} from "../buttons/ButtonComponent.tsx";
import {Link, useLocation} from "wouter";
import {useThemeContext} from "../../hooks/useThemeContext.ts";
import {LinkComponent} from "../buttons/LinkComponent.tsx";

export function AppNavbar() {
    const [location] = useLocation();
    const {theme} = useThemeContext();

    const navbarClasses = {
        light: "bg-white/60 text-gray-900",
        dark: "bg-black/60 text-gray-100",
    }

    return (
        <div className="w-full fixed z-10">
            <header className={`py-4 shadow-lg ${navbarClasses[theme]} backdrop-blur-xl`}>
                <div
                    className="flex flex-row justify-between justify-items-center w-full max-w-5xl mx-auto"
                >
                    <Link to="/" className="font-serif font-bold text-4xl normal-case">Flangrys</Link>

                    <nav className="flex gap-4">
                        <LinkComponent to={"/professional/profile"} location={location}>Perfil Técnico</LinkComponent>
                        <LinkComponent to={"/professional/experiences"} location={location}>Experiencias</LinkComponent>
                        <LinkComponent to={"/professional/contact"} location={location}>Contacto</LinkComponent>
                        <LinkComponent to={"/opensource/projects"} location={location}>Proyectos</LinkComponent>
                    </nav>

                    <ButtonComponent>Curriculum</ButtonComponent>
                </div>
            </header>
        </div>
    )
}
