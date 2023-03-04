import React from 'react';
import { User } from 'utils/types';
import { UserRow } from 'components/UserRow';
import { UserListWrapper } from './UserListWrapper';
import { UserListSkeleton } from './UserListSkeleton';

interface UserListProps {
  users: User[] | undefined;
  isLoading: boolean;
}

export const UserList = ({ users = [], isLoading }: UserListProps) => {
  if (isLoading) {
    return <UserListSkeleton />;
  }

  return (
    <UserListWrapper>
      {users.map((user) => {
        return (
          <UserRow
            key={user.id}
            user={user}
            onAction={(action) => {
              console.log('## action = ', action);
            }}
          />
        );
      })}
    </UserListWrapper>
  );
};
