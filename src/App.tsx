import React from 'react';
import { Container, Heading1, Stack } from 'components/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserCreationTrigger } from 'containers/UserCreationContainer';
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
