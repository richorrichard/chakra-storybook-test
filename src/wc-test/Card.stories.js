import React from "react";

import { Card } from "./Card";

import { testCards } from "./CardList.stories";

export default {
  title: "WereCard/Card",
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
  card: testCards.filter((card) => card.id === 1)[0],
};

export const Empty = Template.bind({});
Empty.args = {
  card: testCards.filter((card) => card.id === 2)[0],
};
