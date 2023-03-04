import { UserCreationForm } from 'components/UserCreationForm';
import { useMutation } from 'react-query';
import axios from 'axios';
import { UserCreationDto, UserFormData } from 'utils/types';

const ENDPOINTS = {
  createUser: () => '/users',
};

const useCreateUser = () => {
  return useMutation((useCreationDto: UserCreationDto) => {
    return axios.post(ENDPOINTS.createUser(), useCreationDto);
  }, {});
};

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
