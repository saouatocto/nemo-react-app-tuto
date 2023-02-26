import {PropsWithChildren} from "react";
import { Box } from '../Box';
import clsx from "clsx";
import style from './card.module.css';

interface CardProps {
}

export const Card = ({children}: PropsWithChildren<CardProps>) => {
    return <Box className={clsx(style.wrapper)}>{children}</Box>
}