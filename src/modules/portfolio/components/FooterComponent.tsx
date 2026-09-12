import {ContactFormComponent} from "@modules/portfolio/components/contact/ContactFormComponent.tsx";
import {HelloContactLinkComponent} from "@modules/portfolio/components/links/HelloContactLink.tsx";

export function FooterComponent() {
    return (
        <footer
            className="relative mt-20 border-t"
            style={{borderColor: "color-mix(in oklab, var(--primary) 15%, transparent)"}}
        >
            <div className="mx-auto max-w-5xl px-6 py-20">
                <ContactFormComponent/>

                <div className="mt-16 flex items-center justify-between text-xs text-muted-foreground">
                    <span>© 2026 Francisco M. Prieto Giorgis</span>
                    <HelloContactLinkComponent/>
                </div>
            </div>
        </footer>
    );
}