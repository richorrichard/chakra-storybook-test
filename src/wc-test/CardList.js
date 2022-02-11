import React from "react";

import { Card } from "./Card";

import { SimpleGrid } from "@chakra-ui/react";

export const CardList = ({ cardsArray, ...props }) => {
  debugger;

  const cards = cardsArray.map((card) => {
    return <Card key={card.id} card={card} />;
  });

  return (
    <SimpleGrid spacing="30px" minChildWidth="320px">
      {cards}
    </SimpleGrid>
  );
};
