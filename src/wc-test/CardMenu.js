import React from "react";

import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  IconButton,
} from "@chakra-ui/react";

import { DotsVerticalIcon } from "@heroicons/react/solid";
import { PencilIcon, TrashIcon } from "@heroicons/react/outline";

export const CardMenu = () => {
  return (
    <Menu isOpen={true}>
      <MenuButton
        as={IconButton}
        icon={<Icon as={DotsVerticalIcon} w={6} h={6} />}
      >
        Actions
      </MenuButton>
      <MenuList
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
        <MenuItem ml="0" icon={<Icon as={PencilIcon} w={5} h={5} />}>
          Edit Card
        </MenuItem>
        <MenuItem ml="0" icon={<Icon as={TrashIcon} w={5} h={5} />}>
          Delete Card
        </MenuItem>
      </MenuList>
    </Menu>
  );
};
