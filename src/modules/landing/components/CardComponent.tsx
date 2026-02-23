import type {PropsWithChildren} from "react";
import type {CardListProps, CardProps, DurationProps} from "../../ui/types/card-component.props.ts";
import {useThemedClasses} from "../../ui/hooks/useThemedClasses.ts";


export const IntlDateFormat = new Intl.DateTimeFormat("es-AR", {month: "long", year: "numeric"});


function CardComponent(props: PropsWithChildren<CardProps>) {
    const {children, onClick, heading, subheading} = props;

    const themeClasses = useThemedClasses({
        border: {light: "border-slate-300 hover:border-slate-400", dark: "border-slate-800 hover:border-slate-700"},
        heading: {
            light: "text-indigo-900 group-hover:text-violet-800",
            dark: "text-indigo-500 group-hover:text-violet-400"
        },
        subheading: {light: "text-slate-950", dark: "text-slate-400"},
    });

    return (
        <div
            className={`col-span-full relative cursor-pointer border-b group transition-all duration-300 ${themeClasses.border}`}
            onClick={onClick}
        >
            <div className="px-8 py-4 header-group">
                <h3 className={`font-normal ${themeClasses.heading} transition-colors duration-300`}>{heading}</h3>
                <h6 className={`font-medium ${themeClasses.subheading} transition-colors duration-300`}>{subheading}</h6>
                {children}
            </div>
        </div>
    )
}


function Duration(props: DurationProps) {
    const {from, to} = props;

    const themedClass = useThemedClasses({
        duration: {light: "text-stone-600", dark: "text-slate-400"},
    })

    return <span className={`block text-sm ${themedClass.duration}`}>{IntlDateFormat.formatRange(from, to)}</span>
}


function CardList(props: CardListProps) {
    const {items} = props;

    const themedClasses = useThemedClasses({
        list: {light: "text-stone-600", dark: "text-slate-400"}
    });

    return (
        <ul className={`pb-4 list-disc list-inside text-sm space-y-1 ${themedClasses.list}`}>
            {items.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    )
}


CardComponent.Summary = ({children}: PropsWithChildren) => children;
CardComponent.Duration = Duration;
CardComponent.List = CardList;


export {CardComponent};
