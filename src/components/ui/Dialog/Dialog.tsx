import React from "react";
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { Cross1Icon } from '@radix-ui/react-icons';
import clsx from "clsx";
import styles from './dialog.module.css';

export const DialogContent = React.forwardRef<HTMLDivElement, DialogPrimitive.DialogContentProps>(
    ( { children, ...props },
      forwardedRef)=> {
    return <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={clsx(styles.overlay)} />
        <DialogPrimitive.Content className={clsx(styles.content_wrapper)} {...props} ref={forwardedRef}>
            {children}
            <DialogPrimitive.Close asChild>
                <button className={clsx(styles.close_button)} aria-label="close">
                    <Cross1Icon />
                </button>
            </DialogPrimitive.Close>
        </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
});

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;