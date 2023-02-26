import React from 'react';
import {Avatar, Button, Card, Container, Heading1, Skeleton, Text} from 'components/ui';

const App = ()  => {
  return (
    <div className="App">
        <Container>
            <Heading1>Nemo 2023</Heading1>
            <Card>
                <Avatar />
                <Text>Date de création</Text>
                <Skeleton width={200} height={12} />
                <Button onPress={() => console.log("## onPress")}>Activer</Button>
                <Button style="outline" onPress={() => console.log("## onPress")}>Activer</Button>
            </Card>
        </Container>
    </div>
  );
}

export default App;
