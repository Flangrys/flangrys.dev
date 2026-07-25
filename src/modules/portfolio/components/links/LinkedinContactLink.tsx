import SvgLinkedinIcon from "/src/assets/linkedin-brand-icon.svg?react";
import { profile } from "@libs/portfolio.const.ts";

export function LinkedinContactLink() {
  return (
    <a
      href={profile.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="text-muted-foreground transition-colors hover:text-foreground"
    >
      <SvgLinkedinIcon/>
    </a>
  );
}
