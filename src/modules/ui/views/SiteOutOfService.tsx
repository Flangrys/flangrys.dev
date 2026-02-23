export default function SiteOutOfService() {
    return (
        <main>
            <section className="flex place-items-center py-20 h-dvh">
                <div className="grid grid-cols-6 grid-rows-[1fr_auto] gap-2.5 h-max">

                    <div className="col-span-full header-group flex flex-col place-content-center">
                        <h1 className="font-sans">¡Vaya!• 503 No disponible</h1>
                        <p className="text-xl">
                            Parece que el sitio que estas buscando no se encuentra disponible en este momento. En caso
                            de que el sitio de forma inesperada haya caido, intente con los siguientes pasos:
                        </p>

                        <ol className="px-4 list-decimal list-inside">
                            <li>Fuerze la recarga de la página usando <kbd className="code">Ctrl + F5</kbd>.</li>
                            <li>Intente descartar problemas de conectividad de su red o de su proveedor.</li>
                            <li>Si el problema persiste, contacte con el administrador del sitio.</li>
                        </ol>
                    </div>
                </div>
            </section>
        </main>
    )
}
