export interface Data {
    rating: number;
    text?: string;
    title: string;
}
  
export interface Props {
    className: string;
    data: Data[];
}