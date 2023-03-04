import React from 'react';
import { Avatar, Card, Container, Heading1, Stack, Text } from 'components/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserCreationTrigger } from 'containers/UserCreationContainer';
import { UserRow } from 'components/UserRow';
import { User } from 'utils/types';
import { USER_STATUS } from 'utils/constants';
import { UserList } from 'components/UserList';
import { UserListContainer } from 'containers/UserListContainer';

const queryClient = new QueryClient();

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

          <UserListContainer />
        </Container>
      </div>
    </QueryClientProvider>
  );
};

export default App;
