export interface navigation {
    title: string;
    url: string;
}

export interface Props {
    className?: string;
    gap?: number;
    data: navigation[];
}