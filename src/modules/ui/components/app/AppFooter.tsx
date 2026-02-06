import {Link} from "react-router";

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


                        <nav className="flex flex-col gap-4 w-1/2">
                            <h3>Contacto</h3>
                            <a href="https://linkedin.com/in/francisco-matias-prieto-giorgis">Linkedin</a>
                            <a href="https://github.com/flangrys">Github</a>
                            <Link to="./professional/contact/">Email</Link>
                        </nav>

                        <div className="flex place-content-center w-full pt-8">
                            <p className="text-sm text-zinc-700">Hecho con ❤ por Francisco Matias Prieto Giorgis.</p>
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}
