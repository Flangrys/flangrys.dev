import {Link} from "wouter";

export function AppFooter() {
    return (
        <>
            <div className="w-full sticky top-full z-10">
                <footer className="py-8">
                    <div
                        className="flex flex-row flex-wrap justify-between place-content-center w-full max-w-5xl mx-auto"
                    >
                        <div className="flex flex-col gap-2">
                            <h3>Flangrys</h3>
                            <p className="font-sans text-md">Todos los derechos reservados.</p>
                        </div>

                        <nav className="flex flex-col gap-4">
                            <h3>Profesional</h3>
                            <Link to="/">Perfil</Link>
                            <Link to="/">Experiencia</Link>
                            <Link to="/">Proyectos</Link>
                        </nav>

                        <nav className="flex flex-col gap-4">
                            <h3>Contacto</h3>
                            <Link to="/">Linkedin</Link>
                            <Link to="/">Github</Link>
                        </nav>

                        <div className="flex place-content-center w-full pt-12">
                            <p className="text-sm text-zinc-700">Hecho con ❤ por Francisco Matias Prieto Giorgis.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
