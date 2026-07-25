import {SectionTitleComponent} from "./SectionTitleComponent.tsx";
import {projects, type ProjectType} from "@libs/portfolio.const.ts";

function ProjectItem(p: ProjectType, i: number) {
    return (
        <a key={p.name + i}
           href={p.url || "#"}
           target="_blank"
           rel="noopener noreferrer"
           className="group relative block overflow-hidden rounded-2xl p-6 transition-all"
           style={{
               border:
                   "1px solid color-mix(in oklab, var(--primary) 16%, transparent)",
               background:
                   "color-mix(in oklab, var(--primary) 3%, var(--background))",
           }}
        >
            <div className="flex items-start justify-between gap-4">
                <div>
                    <h3 className="text-lg font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">{p.tagline}</p>
                </div>
                <span className="text-xs font-mono text-muted-foreground">{p.year}</span>
            </div>
            <div className="mt-6 flex items-center justify-between">
                <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground">
                    {p.stack.map((s) => (<li key={s}>{s}</li>))}
                </ul>
                {p.url ? (
                    <span aria-hidden className="text-sm text-primary transition-transform group-hover:translate-x-0.5">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.4 18L5 16.6L14.6 7H6V5H18V17H16V8.4L6.4 18Z" fill="currentColor"/>
                        </svg>
                    </span>
                ) : (
                    <span className="text-xs text-muted-foreground/70">Pronto</span>
                )}
            </div>
        </a>
    );
}

export function ProjectsSectionComponent() {
    return (
        <section id="work" className="mx-auto max-w-5xl px-6 py-20">
            <SectionTitleComponent eyebrow="03" title="Proyectos seleccionados"/>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
                Cada proyecto vive en su propio sitio. Hacé click para abrirlo en una nueva pestaña.
            </p>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
                {projects.map(ProjectItem)}
            </div>
        </section>
    );
}