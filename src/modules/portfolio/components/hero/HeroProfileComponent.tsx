import SvgFlangrysAvatarDark from "/src/assets/flangrys_cute_avatar_dark.svg?react";
import SvgFlangrysAvatarLight from "/src/assets/flangrys_cute_avatar_light.svg?react";
import {useTheme} from "@modules/ui/hooks/useTheme.ts";

export function HeroProfilePictureComponent() {
    const {theme} = useTheme();
    switch (theme) {
        case "light":
            return <SvgFlangrysAvatarLight/>;
        case "dark":
            return <SvgFlangrysAvatarDark/>;
    }
}

export function HeroProfileComponent() {
    return (
        <div
            role="img"
            aria-label="PROFILE_PICTURE_PLACEHOLDER"
            className="relative h-40 w-40 shrink-0 overflow-hidden rounded-full border border-border bg-linear-to-br from-primary/15 via-accent/10 to-primary/5 md:h-48 md:w-48"
        >
            <div className="absolute inset-0 flex items-center justify-center">
                <HeroProfilePictureComponent/>
            </div>

            <div className="pointer-events-none absolute inset-0 rounded-full ring-1 ring-inset ring-primary/10"/>
        </div>
    );
}