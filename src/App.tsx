import React from 'react';
import { Avatar, Card, Container, Heading1, Stack, Text } from 'components/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserCreationTrigger } from 'containers/UserCreationContainer';
import { UserRow } from 'components/UserRow';
import { User } from 'utils/types';
import { USER_STATUS } from 'utils/constants';

const queryClient = new QueryClient();

const USER: User = {
  firstName: 'saber',
  lastName: 'ouarezzamen',
  createdAt: '02/02/2022 13:14',
  status: USER_STATUS.ACTIVE,
  email: 'saou@octo.ma',
};
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
          <Stack direction={'column'} spacing={'4'} fullWidth>
            <UserRow
              user={USER}
              onAction={(action) => {
                console.log('## action = ', action);
              }}
            />
          </Stack>
        </Container>
      </div>
    </QueryClientProvider>
  );
};

export default App;
