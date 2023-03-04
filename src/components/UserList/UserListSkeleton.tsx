import { UserListWrapper } from './UserListWrapper';
import { UserRowSkeleton } from 'components/UserRow';

export const UserListSkeleton = () => {
  return (
    <UserListWrapper>
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
      <UserRowSkeleton />
    </UserListWrapper>
  );
};
