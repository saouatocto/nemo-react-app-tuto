import { PropsWithChildren } from 'react';
import { Stack } from 'components/ui';

export const UserListWrapper = ({ children }: PropsWithChildren) => {
  return (
    <Stack direction={'column'} spacing={'4'} fullWidth>
      {children}
    </Stack>
  );
};
