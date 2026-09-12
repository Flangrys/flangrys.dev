interface SectionTitleComponentProps {
    eyebrow: string;
    title: string
}

export function SectionTitleComponent({eyebrow, title}: SectionTitleComponentProps) {
    return (
        <div className="flex items-baseline gap-4 mb-10">
            <p className="eyebrow text-primary">{eyebrow}</p>
            <h3 className="text-foreground">{title}</h3>
        </div>
    );
}