import Container from "../components/layout/Container.tsx";

export default function SiteNotFoundView() {
    return (
        <main className="pt-16">
            <section className="grid grid-cols-4 grid-rows-[1fr_auto] gap-2.5">
                <Container className="col-span-3">
                    <h1 className="font-sans font-bold text-5xl">404</h1>
                    <p className="font-serif font-light text-lg">
                        Parece que el sitio que intentas encontrar no existe.
                    </p>
                </Container>
            </section>
        </main>
    )
}
