import { JSX, ReactNode } from "react";

export interface Props {
    tag: keyof JSX.IntrinsicElements;
    href?: string;
    className?: string;
    children: ReactNode;
}
  