import { LinkedinContactLink } from "../links/LinkedinContactLink.tsx";
import { GithubContactLink } from "../links/GithubContactLink.tsx";
import { EmailContactLink } from "../links/EmailContactLink.tsx";

export function HeroContactComponent() {
  return (
    <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
      <EmailContactLink />
      <span className="text-muted-foreground/60">·</span>
      <LinkedinContactLink />
      <span className="text-muted-foreground/60">·</span>
      <GithubContactLink />
    </div>
  );
}
