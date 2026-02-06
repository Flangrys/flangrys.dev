import {useThemeContext} from "../../hooks/useThemeContext.ts";
import {LinkComponent} from "../buttons/LinkComponent.tsx";
import {Link} from "react-router";

function AppNavbar() {
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
                        <LinkComponent to="./professional/experience">Experiencias</LinkComponent>
                        <LinkComponent to="./professional/projects">Proyectos</LinkComponent>
                        <LinkComponent to="./professional/contact">Contacto</LinkComponent>
                    </nav>

                    {/*<LinkComponent to="/cv">Curriculum</LinkComponent>*/}
                </div>
            </header>
        </div>
    )
}

export default AppNavbar
