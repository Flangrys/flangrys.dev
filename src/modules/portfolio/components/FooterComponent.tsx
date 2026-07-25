import {useRef} from "react";
import {ContactFormComponent} from "@modules/portfolio/components/contact/ContactFormComponent.tsx";

export function FooterComponent() {
    const sentinelRef = useRef<HTMLDivElement>(null);

    return (
        <footer
            className="relative mt-20 border-t"
            style={{borderColor: "color-mix(in oklab, var(--primary) 15%, transparent)"}}
        >
            <div ref={sentinelRef}/>
            <div className="mx-auto max-w-5xl px-6 py-20">

                <ContactFormComponent sentinel={sentinelRef}/>

                <div className="mt-16 flex items-center justify-between text-xs text-muted-foreground">
                    <span>© 2026 Francisco M. Prieto Giorgis</span>
                    <span>Desplegado con Github Pages</span>
                </div>
            </div>
        </footer>
    );
}