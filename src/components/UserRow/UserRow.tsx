import { User, UserActionType } from 'utils/types';
import { Avatar, Badge, Card, Stack, Text } from 'components/ui';
import React from 'react';
import { getUserFullName } from 'utils/helpers';
import styles from './user_row.module.css';
import { UserRowActions } from 'components/UserRowActions';
import { formatDate } from '../../utils/helpers/date';

interface UserRowProps {
  user: User;
  onAction: (action: UserActionType) => void;
}

export const UserRow = ({ user, onAction }: UserRowProps) => {
  // Event handler
  const handleOnAction = (action: UserActionType) => {
    onAction(action);
  };
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
        <Text className={styles.value}>{formatDate(user.createdAt)}</Text>
      </Stack>

      <Stack direction={'column'} spacing={1} className={styles.status}>
        <Badge variant={'success'} label={user.status} />
      </Stack>

      <Stack direction={'column'} spacing={1}>
        <UserRowActions onAction={handleOnAction} />
      </Stack>
    </Card>
  );
};
