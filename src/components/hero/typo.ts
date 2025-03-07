interface Data {
  title: string;
  text?: string;
  url?: string;
  btnLabel?: string;
  btnClass?: string;
  media?: string;
  placeholder?: string;
}

export default interface Props {
  data: Data;
}