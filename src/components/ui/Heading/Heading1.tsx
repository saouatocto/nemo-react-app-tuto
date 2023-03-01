import {PropsWithChildren} from 'react';
import clsx from 'clsx';
import styles from './heading.module.css';

interface Heading1Props {}
export const Heading1 = ({ children }: PropsWithChildren<Heading1Props>) => {
  return <h1 className={clsx(styles.h1)}>{children}</h1>;
};
