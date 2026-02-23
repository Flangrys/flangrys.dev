import {useThemedClasses} from "../../hooks/useThemedClasses.ts";
import {LinkComponent} from "../buttons/LinkComponent.tsx";
import {useThemeContext} from "../../hooks/useThemeContext.ts";
import SvgFlangrysDotDevLight from "/src/assets/flangrys_dot_dev_light_favicon.svg?react";
import SvgFlangrysDotDevDark from "/src/assets/flangrys_dot_dev_dark_favicon.svg?react";
import {Link} from "react-router";


function AppNavbar() {
    const {theme} = useThemeContext();

    const themedClasses = useThemedClasses({
        navbar: {light: "bg-white/40 text-gray-900", dark: "bg-black/40 text-gray-100"},
    });

    return (
        <div className="w-full fixed z-10">
            <header className={`py-4 shadow-lg ${themedClasses.navbar} backdrop-blur-xl`}>
                <div
                    className="flex flex-row justify-between place-items-center w-full max-w-5xl mx-auto"
                >
                    <Link to="/">
                        {theme === "dark" ? <SvgFlangrysDotDevLight /> : <SvgFlangrysDotDevDark />}
                    </Link>

                    <nav className="flex gap-4">
                        <LinkComponent to="./experience">Experiencias</LinkComponent>
                        <LinkComponent to="./projects">Proyectos</LinkComponent>
                        <LinkComponent to="./contact">Contacto</LinkComponent>
                    </nav>

                    {/*<LinkComponent to="/cv">Curriculum</LinkComponent>*/}
                </div>
            </header>
        </div>
    )
}

export default AppNavbar
