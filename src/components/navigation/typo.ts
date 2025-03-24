import { NavigationItem } from '@/context/navigation';

export interface Props {
    className?: string;
    mobile?: boolean;
    data: NavigationItem[];
    ListClassName?: string;
    isScrolling?: number;    
    children?: React.ReactNode;
    defaultexpanded?: string;
}