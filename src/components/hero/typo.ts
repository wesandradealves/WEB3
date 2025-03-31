export default interface Props {
  btnAnimation?: string;
  title: string;
  text?: string;
  media?: {
    url?: string;
  };
  placeholder?: string;
  backgroundimage?: string;
  cta?: {
    btnLabel?: string;
    btnClass?: string;
    btnAnimation?: string;
    url?: string;
  }
}