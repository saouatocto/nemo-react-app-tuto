import { PropsWithChildren } from 'react';
import { Box } from '../Box';
import style from './card.module.css';

interface CardProps {}

export const Card = ({ children }: PropsWithChildren<CardProps>) => {
  return <Box className={style.wrapper}>{children}</Box>;
};
