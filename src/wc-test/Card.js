import React from "react";

import { CardMenu } from "./CardMenu";

import { Box, Text, Heading, Image } from "@chakra-ui/react";

export const Card = () => {
  return (
    <Box
      borderRadius="30px"
      backgroundColor="white"
      border="solid 2px black"
      height="max-content"
      minWidth="340px"
      maxWidth="400px"
      display="block"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        m="25px 25px 0px"
        minHeight="35px"
      >
        <Text display="flex">xxxx 7358</Text>
        <Box display="flex" justifyContent="space-around">
          <CardMenu />
        </Box>
      </Box>
      <Box ml="25px" mr="25px">
        <Heading as="h1" size="lg" minHeight="60px" mb="25px" mt="5px">
          Personal Freedom
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
        mt={10}
      >
        <Text display="flex" alignItems="center">
          Aint Been used yet
        </Text>
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
