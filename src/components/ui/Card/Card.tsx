import { PropsWithChildren } from 'react';
import { Box } from '../Box';
import style from './card.module.css';
import clsx from 'clsx';

interface CardProps {
  className?: string;
}

export const Card = ({ children, className }: PropsWithChildren<CardProps>) => {
  return <Box className={clsx(style.wrapper, className)}>{children}</Box>;
};
