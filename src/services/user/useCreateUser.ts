import { useMutation, useQueryClient } from 'react-query';
import { UserCreationDto, UserDto } from 'utils/types';
import { api } from 'common';
import { ENDPOINTS, QUERY_KEYS, USER_STATUS } from 'utils/constants';
import { v4 as uuidv4 } from 'uuid';

const mapUserCreationDtoToUserDto = (
  userCreationDto: UserCreationDto,
): UserDto => {
  return {
    ...userCreationDto,
    createdAt: '',
    id: uuidv4(),
    status: USER_STATUS.ACTIVE,
  };
};

export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation(
    (useCreationDto: UserCreationDto) => {
      return api.post(ENDPOINTS.createUser(), useCreationDto);
    },
    {
      onMutate: (data) => {
        const currentUsers =
          queryClient.getQueryData<UserDto[]>([QUERY_KEYS.USERS]) || [];

        const newUser = mapUserCreationDtoToUserDto(data);
        queryClient.setQueryData<UserDto[]>(
          [QUERY_KEYS.USERS],
          [newUser, ...currentUsers],
        );
        console.log('## useCreateUser - onMutate() ');
      },
      onSuccess: (data) => {
        console.log('## useCreateUser - onSuccess() ');
      },
      onError: () => {
        console.log('## useCreateUser - onError() ');
      },
      onSettled: () => {
        queryClient.invalidateQueries([QUERY_KEYS.USERS]);
      },
    },
  );
};
