import SquareGridSvg from "/src/assets/square-grid.svg?react";
import {LinkButton} from "../../ui/components/buttons/LinkButton.tsx";

interface HeroQuickActionsProps {
    label: string;
    to: string;
}

export function HeroQuickActions(props: HeroQuickActionsProps) {
    const {label, to} = props;

    return (
        <LinkButton to={to}>
            <div className="flex gap-2.5 place-items-center">
                <SquareGridSvg/>
                <span className="font-sans uppercase text-center text-lg">{label}</span>
            </div>
        </LinkButton>
    )
}
