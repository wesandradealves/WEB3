export interface Data {
    id: number,
    img?: string;
    text?: string;
    title: string;
}
  
export interface Props {
    className: string;
    data: Data[];
}