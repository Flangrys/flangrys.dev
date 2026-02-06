import Container from "../components/layout/Container.tsx";

export default function SiteOutOfService() {
    return (
        <main className="pt-16">
            <section className="grid grid-cols-4 grid-rows-[1fr_auto] gap-2.5">
                <Container className="col-span-3">
                    <h1 className="font-sans font-bold text-5xl">Ops!</h1>
                    <p className="font-serif font-light text-lg">
                        Me disculpo por los inconvenientes. Este apartado ha dejado de funcionar correctamente.
                    </p>
                </Container>
            </section>
        </main>
    )
}
