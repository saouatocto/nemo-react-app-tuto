import {PropsWithChildren} from 'react';
import {Box} from 'components/ui/Box';
import styles from './container.module.css';
import clsx from 'clsx';

interface ContainerProps {}
export const Container = ({ children }: PropsWithChildren<ContainerProps>) => {
  return <Box className={clsx(styles.wrapper)}>{children}</Box>;
};
