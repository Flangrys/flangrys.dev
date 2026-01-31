import {useSearchParams} from "wouter";
import {useQuery} from "@apollo/client/react";
import {GQL_QUERY_PAGINATED_PROJECTS} from "../../../api/api.queries.ts";
import type {ProfessionalProjects} from "../../../api/api.interface.ts";

export default function ProjectsView() {
    const [searchParams] = useSearchParams();
    const stack = searchParams.get("stack");
    const name = searchParams.get("name");

    const {loading, error, data} = useQuery<ProfessionalProjects>(GQL_QUERY_PAGINATED_PROJECTS);

    if (error) {
        console.error("An error was captured while retrieving projects.");
    }

    if (!data) {
        console.warn("No data was retrieved from the API.");
    }

    return (
        <main className="pt-16" aria-busy={loading}>
            <section>
                <h1>{stack}</h1>
                <h2>{name}</h2>
            </section>
        </main>
    )
}
