import {Box} from "components/ui/Box";
import clsx from "clsx";
import styles from './badge.module.css';

interface BadgeProps {
    label: string;
    variant: 'success' | 'warning' | 'danger';
}
export const Badge = ({label, variant}: BadgeProps)  => {

    const classNames = [
        variant === 'warning' && styles.warning,
        variant === 'success' && styles.success,
        variant === 'danger' && styles.danger,
    ]
    return <Box className={clsx(styles.wrapper, classNames)}>
        <Box className={clsx(styles.dot)} />
        <Box className={clsx(styles.label)}>{label}</Box>
    </Box>
}