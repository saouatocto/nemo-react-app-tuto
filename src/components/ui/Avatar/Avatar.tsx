import {Root as RadixAvatar, Image as RadixAvatarIamge, Fallback as RadixAvatarFallback } from '@radix-ui/react-avatar';
import clsx from "clsx";
import styles from './avatar.module.css';

export const Avatar = () => {
    return <RadixAvatar className={clsx(styles.wrapper)}>
        <RadixAvatarIamge className={clsx(styles.avatar_image)} src={'https://api.dicebear.com/5.x/initials/svg?seed=Mittens'} alt={"saber ouarezzamen"} />
        <RadixAvatarFallback className={clsx(styles.avatar_fallback)} delayMs={600}>
            CT
        </RadixAvatarFallback>
    </RadixAvatar>
}