export interface navigation {
    title: string;
    url: string;
    type?: string;
    btnClass?: string;
}

export interface Props {
    className?: string;
    gap?: number;
    data: navigation[];
}