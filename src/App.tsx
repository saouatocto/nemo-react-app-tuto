import React, {useState} from 'react';
import {
    Avatar,
    Badge,
    Button,
    Card,
    Container,
    Dialog,
    Heading1,
    Skeleton,
    Stack,
    Text,
    TextField,
    DialogTrigger,
    DialogContent
} from 'components/ui';

const OpenDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return <>
            <Button onPress={() => setDialogOpen(true)}>Open dialog</Button>
            <Dialog defaultOpen={false} open={dialogOpen} onOpenChange={value => setDialogOpen(value)}>
                <DialogContent>Dialog Content</DialogContent>
            </Dialog>
        </>
}

const App = ()  => {
  return (
    <div className="App">
        <Container>
            <Stack direction={"row"} justifyContent={"space-between"}>
                <Heading1>Nemo 2023</Heading1>
                <OpenDialog />
            </Stack>
            <Card>
                <Stack direction={"column"} spacing={"4"}>
                    <Avatar />
                    <Text>Date de création</Text>
                    <Skeleton width={200} height={12} />
                    <Stack direction={"row"} spacing={"5"}>
                        <Button onPress={() => console.log("## onPress")}>Activer</Button>
                        <Button style="outline" onPress={() => console.log("## onPress")}>Activer</Button>
                    </Stack>
                    <Stack direction={"column"} spacing={"4"}>
                        <Badge variant={"success"} label={"actif"} />
                        <Badge variant={"warning"} label={"suspendu"} />
                        <Badge variant={"danger"} label={"supprimé"} />
                    </Stack>
                    <TextField fullWidth label={"name"} onChange={value => console.log(value)}/>
                </Stack>
            </Card>
        </Container>
    </div>
  );
}

export default App;
