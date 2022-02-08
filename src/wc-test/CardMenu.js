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
    <Menu>
      <MenuButton
        as={IconButton}
        icon={<Icon as={DotsVerticalIcon} w={6} h={6} />}
      >
        Actions
      </MenuButton>
      <MenuList>
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
