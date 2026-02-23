import type {ContainerProps} from "../../types/container-component.props.ts";

export default function Container(props: ContainerProps) {
    const {children, className} = props;

    const containerClassName = className ? " " + className : ""

    return (
        <div className={`container mx-auto pt-4` + containerClassName}>
            {children}
        </div>
    )
}
