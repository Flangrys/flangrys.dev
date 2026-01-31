import type {ReactNode} from "react";

interface RainbowProps {
    children: ReactNode;
}

export function Rainbow(props: RainbowProps) {
    const {children} = props;

    return (
        <span className="relative inline-block">
          <span
              className="font-black bg-linear-to-r from-indigo-500 via-purple-500 to-pink-500 bg-size-[200%_auto] bg-clip-text text-transparent"
              style={{"animation": "gradient-x 3s linear infinite"}}
          >
            {children}
          </span>
    </span>
    )
}
