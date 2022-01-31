import React from "react";

import { Title } from './Title';

export default {
  title: 'Chakra/Title',
  component: Title,
}

const Template = (args) => <Title {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  content: "Title Goes Here!",
};


