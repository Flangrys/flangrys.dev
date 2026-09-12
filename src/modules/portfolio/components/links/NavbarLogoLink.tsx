import SvgFlangrysDotDevDark from "/src/assets/flangrys_dot_dev_dark_favicon.svg?react";
import SvgFlangrysDotDevLight from "/src/assets/flangrys_dot_dev_light_favicon.svg?react";

import {useTheme} from "@modules/ui/hooks/useTheme.ts";

export function NavbarLogoLinkComponent() {
    const {theme} = useTheme();

    return (
        <a href="/" className="text-nav cursor-pointer">
            {theme === "light" ? <SvgFlangrysDotDevDark/> : <SvgFlangrysDotDevLight/>}
        </a>
    );
}