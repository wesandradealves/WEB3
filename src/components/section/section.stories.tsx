/* eslint-disable */
import Section from './section';

export default {
  title: "section",
};

export const Default = () => (
  <Section 
    children={<div>Default Content</div>} 
    subtitle="Default Subtitle" 
    title="Default Title" 
    barstitle={"on"}
  />
);

Default.story = {
  name: 'default',
};