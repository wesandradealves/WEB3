interface Data {
  title: string;
  text?: string;
  url?: string;
  btnLabel?: string;
  btnClass?: string;
  media?: string;
  placeholder?: string;
  btnAnimation?: string;
}

export default interface Props {
  btnAnimation?: string;
  data: Data;
  backgroundimage?: string;
}