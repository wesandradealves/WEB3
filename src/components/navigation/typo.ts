export interface navigation {
    title: string;
    url: string;
    type?: string;
    btnClass?: string;
    className?: string;
}

export interface Props {
    className?: string;
    gap?: number;
    data: navigation[];
    ListClassName?: string;
}