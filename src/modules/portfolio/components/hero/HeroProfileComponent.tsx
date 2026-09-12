import SvgFlangrysAvatarDark from "/src/assets/flangrys_cute_avatar_dark.svg?react";
import SvgFlangrysAvatarLight from "/src/assets/flangrys_cute_avatar_light.svg?react";
import {useTheme} from "@modules/ui/hooks/useTheme.ts";

export function HeroProfileComponent() {
    const {theme} = useTheme();
    switch (theme) {
        case "light":
            return <SvgFlangrysAvatarLight/>;
        case "dark":
            return <SvgFlangrysAvatarDark/>;
    }
}