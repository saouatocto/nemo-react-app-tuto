import { UserCreationForm } from 'components/UserCreationForm';
import { UserFormData } from 'utils/types';
import { useCreateUser } from 'services/user';

interface UserCreationContainerProps {
  onSuccess?: () => void;
  onError?: () => void;
  onCancel?: () => void;
}

export const UserCreationContainer = ({
  onSuccess,
  onError,
  onCancel,
}: UserCreationContainerProps) => {
  const { mutate: createUser } = useCreateUser();

  // Event handlers
  const handleOnSubmit = (data: UserFormData) => {
    createUser(data, {
      onSuccess: (data) => {
        if (onSuccess) {
          onSuccess();
        }
      },
      onError: () => {
        if (onError) {
          onError();
        }
      },
    });
  };
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };

  return (
    <>
      <UserCreationForm onSubmit={handleOnSubmit} onCancel={handleOnCancel} />
    </>
  );
};
