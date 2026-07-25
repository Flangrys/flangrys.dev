interface SectionTitleComponentProps {
    eyebrow: string;
    title: string
}

export function SectionTitleComponent({eyebrow, title}: SectionTitleComponentProps) {
    return (
        <div className="flex items-baseline gap-4">
            <span className="text-xs font-mono text-primary">{eyebrow}</span>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                {title}
            </h2>
        </div>
    );
}