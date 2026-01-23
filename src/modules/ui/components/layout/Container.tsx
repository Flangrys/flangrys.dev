import type {ContainerProps} from "../../types/components.interface.ts";

export default function Container(props: ContainerProps) {
    const {children, className} = props;

    const containerClassName = className ? " " + className : ""

    return (
        <div className={`m-auto pt-4` + containerClassName}>
            {children}
        </div>
    )
}
