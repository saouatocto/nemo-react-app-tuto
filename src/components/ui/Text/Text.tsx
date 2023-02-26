import {PropsWithChildren} from "react";
import {Box} from "components/ui/Box";
import styles from "./text.module.css";
import clsx from "clsx";

interface TextProps {
    as?: 'p' | 'span'
}
export const Text = ({as ='p', children}: PropsWithChildren<TextProps>) => {
    return <Box as={as} className={clsx(styles.text)}>{children}</Box>
}