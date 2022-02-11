import React from "react";

import { CardList } from "./CardList";

export default {
  title: "WereCard/Card List",
  component: CardList,
};

const testCards = [
  {
    id: 1,
    name: "Freedom",
    last4: "7358",
    type: "Visa",
    locations: ["Walmart", "Target", "Amazon.com", "Venmo", "Golds Gym"],
  },
  {
    id: 2,
    name: "American Express",
    last4: "2240",
    type: "American Express",
    locations: [],
  },
];

export const Primary = () => <CardList cardsArray={testCards} />;
export { testCards };
