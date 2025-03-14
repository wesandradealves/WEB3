export interface FAQItem {
    question: string;
    answer: string;
}
  
export interface Props {
    className: string;
    data: FAQItem[];
}