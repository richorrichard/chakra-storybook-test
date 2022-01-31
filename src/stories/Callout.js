import React from "react";

import { Title } from "./Title";
import { Button as ChakraButton } from "@chakra-ui/react";

export const Callout = ({title, btnTitle, colorScheme, btnSize}) => {
  return (
    <div>
      <Title content={title}/>
      <ChakraButton colorScheme={colorScheme} size={btnSize}>{btnTitle}</ChakraButton>
    </div>
  );
};
