import {Link} from "react-router";
import {useThemeContext} from "../../hooks/useThemeContext.ts";
import SvgFlangrysDotDevLight from "/src/assets/flangrys_dot_dev_light_favicon.svg?react";
import SvgFlangrysDotDevDark from "/src/assets/flangrys_dot_dev_dark_favicon.svg?react";

export function AppFooter() {
    const {theme} = useThemeContext();

    const footerClasses = {
        light: "border-slate-300",
        dark: "border-slate-800",
    }

    const copyrightThemeClasses = {
        light: "text-zinc-500",
        dark: "text-zinc-700",
    }

    return (
        <>
            <div className="w-full">
                <footer className={`py-8 ${footerClasses[theme]} border-t`}>
                    <div
                        className="flex flex-row flex-wrap justify-between place-content-center w-full max-w-5xl mx-auto"
                    >
                        <div className="flex flex-col gap-2 w-1/3">
                            <Link to="/">
                                {theme === "dark" ? <SvgFlangrysDotDevLight/> : <SvgFlangrysDotDevDark/>}
                            </Link>
                            <p className={`font-sans text-md ${copyrightThemeClasses[theme]}`}>Todos los derechos
                                reservados.</p>
                        </div>


                        <nav className="flex flex-col gap-4 w-1/3">
                            <h3>Contacto</h3>
                            <a href="https://linkedin.com/in/francisco-matias-prieto-giorgis">Linkedin</a>
                            <a href="https://github.com/flangrys">Github</a>
                            <Link to="./contact/">Email</Link>
                        </nav>

                        <nav className="flex flex-col gap-4 w-1/3">
                            <h3>Enlaces</h3>
                            <a href="https://blog.flangrys.dev/">Blog</a>
                        </nav>

                        <div className="flex place-content-center w-full pt-8">
                            <p className={`text-sm ${copyrightThemeClasses[theme]}`}>Hecho con ❤ por Francisco Matias
                                Prieto Giorgis.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
