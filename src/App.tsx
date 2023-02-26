import React from 'react';
import {Avatar, Card, Container, Heading1, Text} from 'components/ui';

const App = ()  => {
  return (
    <div className="App">
        <Container>
            <Heading1>Nemo 2023</Heading1>
            <Card>
                <Avatar />
                <Text>Date de création</Text>
            </Card>
        </Container>
    </div>
  );
}

export default App;
