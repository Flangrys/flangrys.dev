import {contact} from "@libs/portfolio.const.ts";

export function HelloContactLinkComponent() {
    return (
        <a href={`mailto:${contact.professionalContact}`}
           className="transition-colors hover:text-foreground underline decoration-1 underline-offset-2"
        >
            {contact.professionalContact}
        </a>
    );
}