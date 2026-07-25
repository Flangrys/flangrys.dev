import {stack, type StackType} from "@libs/portfolio.const.ts";
import {SectionTitleComponent} from "./SectionTitleComponent.tsx";

function StackItem(stack: StackType) {
    return (
        <div key={stack.group}>
            <h3 className="text-sm font-medium uppercase tracking-[0.18em] text-primary">
                {stack.group}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
                {stack.items.map((it) => (
                    <li
                        key={it}
                        className="rounded-full px-3 py-1 text-sm text-foreground/80"
                        style={{
                            border:
                                "1px solid color-mix(in oklab, var(--primary) 22%, transparent)",
                            background:
                                "color-mix(in oklab, var(--primary) 5%, transparent)",
                        }}
                    >
                        {it}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export function StackSectionComponent() {
    return (
        <section className="mx-auto max-w-5xl px-6 py-20">
            <SectionTitleComponent eyebrow="04" title="Stack & Certificaciones"/>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
                {stack.map(StackItem)}
            </div>
        </section>
    );
}