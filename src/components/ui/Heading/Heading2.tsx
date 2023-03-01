import {PropsWithChildren} from 'react';
import styles from './heading.module.css';

interface Heading2Props {}
export const Heading2 = ({ children }: PropsWithChildren<Heading2Props>) => {
  return <h2 className={styles.h2}>{children}</h2>;
};
