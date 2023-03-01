import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Heading2, Stack, TextField } from 'components/ui';

interface UserFormData {
  firstName: string;
  lastName: string;
  email: string;
}

interface UserCreationFormProps {
  onSubmit: () => void;
  onCancel: () => void;
}
export const UserCreationForm = ({
  onSubmit,
  onCancel,
}: UserCreationFormProps) => {
  const { control, handleSubmit } = useForm<UserFormData>({
    defaultValues: {
      firstName: '',
      email: '',
      lastName: '',
    },
  });

  const handleOnCancel = () => {
    onCancel();
  };

  const handleOnSubmit: SubmitHandler<UserFormData> = (data) => {
    console.log('## UserCreationForm / data =  ', data);
    onSubmit();
  };

  return (
    <>
      <Heading2>Nouveau nemo</Heading2>
      <form onSubmit={handleSubmit(handleOnSubmit)}>
        <Stack direction={'column'} fullWidth spacing={6}>
          <Stack direction={'column'} fullWidth spacing={4}>
            <Controller
              name={'firstName'}
              control={control}
              render={({ field }) => (
                <TextField fullWidth label={'Prénom'} {...field} />
              )}
            />

            <Controller
              name={'lastName'}
              control={control}
              render={({ field }) => (
                <TextField fullWidth label={'Nom'} {...field} />
              )}
            />

            <Controller
              name={'email'}
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label={'Email'}
                  type={'email'}
                  {...field}
                />
              )}
            />
          </Stack>

          <Stack
            direction={'row'}
            justifyContent={'flex-end'}
            spacing={3}
            fullWidth>
            <Button
              variant={'primary'}
              style={'outline'}
              onPress={handleOnCancel}>
              Annuler
            </Button>
            <Button type={'submit'} variant={'primary'} style={'fill'}>
              Ajouter
            </Button>
          </Stack>
        </Stack>
      </form>
    </>
  );
};
