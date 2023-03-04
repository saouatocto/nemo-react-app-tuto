import React from 'react';
import { Avatar, Card, Container, Heading1, Stack, Text } from 'components/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserCreationTrigger } from 'containers/UserCreationContainer';
import { UserRow } from 'components/UserRow';
import { User } from 'utils/types';
import { USER_STATUS } from 'utils/constants';
import { UserList } from 'components/UserList';

const queryClient = new QueryClient();

const USERS: User[] = [
  {
    id: '60a9e1z53e',
    firstName: 'saber',
    lastName: 'ouarezzamen',
    createdAt: '02/02/2022 13:14',
    status: USER_STATUS.ACTIVE,
    email: 'saou@octo.ma',
  },
  {
    id: '00a9e1z53s',
    firstName: 'saber',
    lastName: 'ouarezzamen',
    createdAt: '02/02/2022 13:14',
    status: USER_STATUS.ACTIVE,
    email: 'saou@octo.ma',
  },
  {
    id: '40a9e1z53k',
    firstName: 'saber',
    lastName: 'ouarezzamen',
    createdAt: '02/02/2022 13:14',
    status: USER_STATUS.ACTIVE,
    email: 'saou@octo.ma',
  },
];
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Container>
          <Stack direction={'row'} justifyContent={'space-between'}>
            <Heading1>Nemo 2023</Heading1>
            <UserCreationTrigger />
          </Stack>
          <br />

          <UserList users={USERS} isLoading={true} />
        </Container>
      </div>
    </QueryClientProvider>
  );
};

export default App;
