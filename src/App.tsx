import React, { useState } from 'react';
import {
  Avatar,
  Button,
  Card,
  Container,
  Dialog,
  DialogContent,
  Heading1,
  Stack,
  Text,
} from 'components/ui';
import { UserCreationForm } from 'components/UserCreationForm';

const OpenDialog = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <Button onPress={() => setDialogOpen(true)}>Open dialog</Button>
      <Dialog
        defaultOpen={false}
        open={dialogOpen}
        onOpenChange={(value) => setDialogOpen(value)}>
        <DialogContent>
          <UserCreationForm onSubmit={() => {}} onCancel={() => {}} />
        </DialogContent>
      </Dialog>
    </>
  );
};

const App = () => {
  return (
    <div className="App">
      <Container>
        <Stack direction={'row'} justifyContent={'space-between'}>
          <Heading1>Nemo 2023</Heading1>
          <OpenDialog />
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
  );
};

export default App;
