import {useSearchParams} from "wouter";

export default function ProjectsView() {
    const [searchParams] = useSearchParams();
    const stack = searchParams.get("stack");
    const name = searchParams.get("name");

    return (
            <main className="pt-16">
                <section>
                    <h1>{stack}</h1>
                    <h2>{name}</h2>
                </section>
            </main>
    )
}
