import React from "react";

import { Callout } from "./Callout";

export default {
  title: "Chakra/Callout",
  component: Callout,
};

const Template = (args) => <Callout {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  title: "Callout Title",
  btnTitle: "BtnTitle",
  btnSize: "xs",
  colorScheme: "teal",
};
