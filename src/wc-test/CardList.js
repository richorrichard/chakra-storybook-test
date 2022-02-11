import React from "react";

import { Card } from "./Card";

import { SimpleGrid } from "@chakra-ui/react";

export const CardList = () => {
  const cardArray = [];

  for (let i = 0; i < 8; i++) {
    cardArray.push(<Card key={i} />);
  }
  return (
    <SimpleGrid spacing="40px" minChildWidth="320px">
      {cardArray}
    </SimpleGrid>
  );
};
