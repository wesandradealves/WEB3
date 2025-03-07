/* eslint-disable */
import Hero from './hero';

export default {
  title: "hero",
};

export const Default = () => <Hero data={{
  title: '',
  text: '',
  url: '',
  btnLabel: '',
  btnClass: '',
  media: ''
}} />;

Default.story = {
  name: 'default',
};
