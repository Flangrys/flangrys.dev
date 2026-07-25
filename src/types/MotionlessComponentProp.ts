import type {RefObject} from "react";
import type {MotionNodeAnimationOptions} from "motion";

export interface MotionSentinelProps {
    sentinel: RefObject<HTMLDivElement | null>;
}

export interface MotionlessComponentProps {
    initialTransition?:  MotionNodeAnimationOptions["initial"];
    terminalTransition?:  MotionNodeAnimationOptions["exit"];
}