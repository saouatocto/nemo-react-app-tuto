import { useGetUsers } from 'services/user/useGetUsers';
import { UserList } from 'components/UserList';

export const UserListContainer = () => {
  const { data: users, isLoading } = useGetUsers();

  return <UserList users={users} isLoading={isLoading} />;
};
