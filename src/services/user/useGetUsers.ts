import { useQuery } from 'react-query';
import { UserDto } from 'utils/types';
import { ENDPOINTS, QUERY_KEYS } from 'utils/constants';
import { api } from 'common';

export const useGetUsers = () => {
  return useQuery<UserDto[]>({
    queryKey: [QUERY_KEYS.USERS],
    queryFn: () => api.get(ENDPOINTS.getUsers()),
    retry: 0,
    refetchOnWindowFocus: false,
    // initialData: USERS,
  });
};
