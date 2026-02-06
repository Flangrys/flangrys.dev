import Container from "../../ui/components/layout/Container.tsx";

export default function ProjectsView() {
    return (
        <main className="pt-16">
            <section className="grid grid-cols-4 grid-rows-[auto_1fr] gap-4 py-20">
                <Container className="col-span-4 header-group border-b border-x-0">
                    <h3>Proyectos</h3>
                    <p className="max-w-2xl">
                        Proyectos personales, opensource, y profesionales; en los que participé de manera activa.
                    </p>
                </Container>


            </section>
        </main>
    )
}
