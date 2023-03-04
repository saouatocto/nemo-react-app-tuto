import { User } from 'utils/types';
import {
  Avatar,
  Badge,
  Box,
  Card,
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
  Stack,
  Text,
} from 'components/ui';
import React from 'react';
import { getUserFullName } from 'utils/helpers';
import styles from './user_row.module.css';

import { DotsVerticalIcon } from '@radix-ui/react-icons';

interface UserRowProps {
  user: User;
}

export const UserRow = ({ user }: UserRowProps) => {
  return (
    <Card className={styles.wrapper}>
      <Stack direction={'row'} spacing={3} alignItems="center">
        <Avatar fullName={getUserFullName(user)} />
        <Stack direction={'column'} spacing={1}>
          <Text className={styles.username}>{getUserFullName(user)}</Text>
          <Text>{user.email}</Text>
        </Stack>
      </Stack>

      <Stack direction={'column'} spacing={1}>
        <Text className={styles.label}>Date de création</Text>
        <Text className={styles.value}>{user.createdAt}</Text>
      </Stack>

      <Stack direction={'column'} spacing={1} className={styles.status}>
        <Badge variant={'success'} label={user.status} />
      </Stack>

      <Stack direction={'column'} spacing={1}>
        <Dropdown>
          <DropdownTrigger asChild>
            <DotsVerticalIcon />
          </DropdownTrigger>
          <DropdownContent>
            <DropdownItem>item 1</DropdownItem>
            <DropdownItem>item 2</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </Stack>
    </Card>
  );
};
