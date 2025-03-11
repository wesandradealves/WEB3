export interface navigation {
    title: string;
    url: string;
    type?: string;
    btnClass?: string;
    below?: navigation[];
    className?: string;
}

export interface Props {
    className?: string;
    mobile?: boolean;
    data: navigation[];
    ListClassName?: string;
    isScrolling?: number;    
    children?: React.ReactNode;
    defaultexpanded?: string;
}