import React from "react";

import { CardMenu } from "./CardMenu";

import { Box, Text, Heading, Image } from "@chakra-ui/react";

export const Card = ({ card, ...props }) => {
  return (
    <Box
      backgroundColor="white"
      height="max-content"
      minWidth="340px"
      maxWidth="400px"
      display="block"
      borderStyle="solid"
      borderWidth="2px 9px 10px 2px"
      borderRadius="30px"
      borderColor="black"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m="25px 25px 0px"
        minHeight="35px"
      >
        <Text display="flex">xxxx {card.last4}</Text>
        <Box display="flex" justifyContent="space-around">
          <CardMenu />
        </Box>
      </Box>
      <Box ml="25px" mr="25px">
        <Heading as="h1" size="lg" minHeight="60px" mb="25px" mt="5px">
          {card.name}
        </Heading>
      </Box>
      <Box
        ml="25px"
        mr="25px"
        mb="20px"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        minHeight={35}
        mt="10px"
      >
        {card.locations.length > 0 ? (
          <Text display="flex" alignItems="center">
            Used in {card.locations.length}{" "}
            {card.locations.length === 1 ? "location" : "locations"}
          </Text>
        ) : (
          <Text display="flex" alignItems="center">
            Ain't Been Used Yet.
          </Text>
        )}
        <Image
          height="35px"
          width="75px"
          display="flex"
          src="https://dd7tel2830j4w.cloudfront.net/f1643214092952x151083677219274080/Visa.svg"
        />
      </Box>
    </Box>
  );
};
