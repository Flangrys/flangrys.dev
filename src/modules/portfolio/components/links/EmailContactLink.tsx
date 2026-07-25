import SvgGenericMailIcon from "/src/assets/generic-mail-brand-icon.svg?react";
import { contact } from "@libs/portfolio.const.ts";

export function EmailContactLink() {
  return (
    <a
      href={`mailto:${contact.professionalContact}`}
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      <SvgGenericMailIcon/>
    </a>
  );
}
