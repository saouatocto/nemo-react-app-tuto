import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Text,
} from 'components/ui';
import { DotsVerticalIcon } from '@radix-ui/react-icons';
import React from 'react';
import { UserActionType } from 'utils/types';
import { USER_ACTION } from 'utils/constants';

interface UserRowActionsProps {
  onAction: (action: UserActionType) => void;
}

export const UserRowActions = ({ onAction }: UserRowActionsProps) => {
  // Event handlers
  const handleOnSuspend = () => {
    onAction(USER_ACTION.SUSPEND);
  };

  const handleOnDelete = () => {
    onAction(USER_ACTION.DELETE);
  };

  return (
    <Dropdown>
      <DropdownTrigger asChild>
        <DotsVerticalIcon />
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem onClick={handleOnSuspend}>
          <Text>Suspendre</Text>
        </DropdownItem>
        <DropdownItem onClick={handleOnDelete}>
          <Text>Supprimer</Text>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
};
