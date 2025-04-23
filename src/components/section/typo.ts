 
export interface Props {
    title?: string;
    subtitle?: string;
    backgroundimage?:unknown;
    background?: string;
    backgroundcolor?: string;
    backgroundsize?: string;
    backgroundposition?: string;
    backgroundattachment?: string;
    classname?: string;
    id?: string;
    direction?: string;
    helper?: string;
    children?: React.ReactNode;
    barstitle?: string;
    opacity?: number;
    gap?: unknown;
    [key: string]: unknown;
}