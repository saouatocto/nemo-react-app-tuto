import React from 'react';
import { Avatar, Card, Container, Heading1, Stack, Text } from 'components/ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { UserCreationTrigger } from 'containers/UserCreationContainer';

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
          <Stack direction={'column'} spacing={'4'} fullWidth>
            <Card>
              <Stack
                direction={'row'}
                spacing={'4'}
                alignItems={'center'}
                fullWidth>
                <Avatar />
                <Text>Date de création</Text>
              </Stack>
            </Card>
            <Card>
              <Stack
                direction={'row'}
                spacing={'4'}
                alignItems={'center'}
                fullWidth>
                <Avatar />
                <Text>Date de création</Text>
              </Stack>
            </Card>
          </Stack>
        </Container>
      </div>
    </QueryClientProvider>
  );
};

export default App;
