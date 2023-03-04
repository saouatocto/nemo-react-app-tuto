import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Button, Heading2, Stack, TextField } from 'components/ui';
import { yupResolver } from '@hookform/resolvers/yup';
import get from 'lodash.get';
import * as yup from 'yup';
import { UserFormData } from 'utils/types';


// TODO move to utils
const userFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, 'Le prénom doit avoir au minimum 3 caractère')
    .required('Le Prénom est obligatoire'),
  lastName: yup
    .string()
    .min(3, 'Le nom doit avoir au minimum 3 caractère')
    .required('Le Nom est obligatoire'),
  email: yup
    .string()
    .email('Email est invalid')
    .required("l'adresse email est obligatoire"),
});

interface UserCreationFormProps {
  onSubmit: (user: UserFormData) => void;
  onCancel: () => void;
}
export const UserCreationForm = ({
  onSubmit,
  onCancel,
}: UserCreationFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserFormData>({
    defaultValues: {
      firstName: '',
      email: '',
      lastName: '',
    },
    resolver: yupResolver(userFormSchema),
  });

  const handleOnCancel = () => {
    onCancel();
  };

  const handleOnSubmit: SubmitHandler<UserFormData> = (userData) => {
    onSubmit(userData);
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
                <TextField
                  fullWidth
                  label={'Prénom'}
                  {...field}
                  errorMessage={get(errors, 'firstName.message')}
                />
              )}
            />

            <Controller
              name={'lastName'}
              control={control}
              render={({ field }) => (
                <TextField
                  fullWidth
                  label={'Nom'}
                  {...field}
                  errorMessage={get(errors, 'lastName.message')}
                />
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
                  errorMessage={get(errors, 'email.message')}
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
