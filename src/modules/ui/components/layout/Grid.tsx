import type {GridProps} from "../../types/ui-components-props.interface.ts";

export default function Grid(props: GridProps) {
    const {children} = props;

    return (
        <div className="grid grid-cols-4 grid-rows-4 gap-4 p-4 m-4">
            {children}
        </div>
    )
}
