import SvgGithubIcon from "/src/assets/github-brand-icon.svg?react";
import {profile} from "@libs/portfolio.const.ts";

export function GithubContactLink() {
    return (
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
            <SvgGithubIcon/>
        </a>
    );
}
