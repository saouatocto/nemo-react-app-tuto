import { Box, Skeleton, Stack } from 'components/ui';
import styles from './user_row_skeleton.module.css';
import React from 'react';

export const UserRowSkeleton = () => {
  return (
    <Box className={styles.wrapper}>
      <Stack direction={'row'} spacing={3} alignItems="center">
        <Skeleton width={48} height={48} rounded />
        <Stack direction={'column'} spacing={2}>
          <Skeleton width={150} height={10} rounded />
          <Skeleton width={90} height={8} rounded />
        </Stack>
      </Stack>
    </Box>
  );
};
