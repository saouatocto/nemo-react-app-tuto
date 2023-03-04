import { PropsWithChildren } from 'react';
import { Box } from 'components/ui/Box';
import styles from './text.module.css';
import clsx from 'clsx';

interface TextProps {
  as?: 'p' | 'span';
  className?: string;
}
export const Text = ({
  as = 'p',
  className,
  children,
}: PropsWithChildren<TextProps>) => {
  return (
    <Box as={as} className={clsx(styles.text, className)}>
      {children}
    </Box>
  );
};
