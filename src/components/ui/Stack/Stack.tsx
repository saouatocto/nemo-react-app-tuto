import {PropsWithChildren} from "react";
import {Box} from "../Box";
import clsx from "clsx";

export type JustifyContent =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around';

export type AlignItems =
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'stretch'
    | 'baseline';

export type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';


export const getFlexDirectionClass = (flexDirection: FlexDirection) => {
    return `flex-${flexDirection}`;
};
export const getFlexAlignItemsClass = (alignItmes: AlignItems) => {
    switch (alignItmes) {
        case 'baseline':
            return 'align-items-baseline';
        case 'flex-start':
            return 'align-items-start';
        case 'flex-end':
            return 'align-items-end';
        case 'center':
            return 'align-items-center';
        case 'stretch':
            return 'align-items-stretch';
        default:
            return null;
    }
};
export const getFlexJustifyContentClass = (justifyContent: JustifyContent) => {
    switch (justifyContent) {
        case 'flex-end':
            return 'justify-content-end ';
        case 'flex-start':
            return 'justify-content-start';
        case 'center':
            return 'justify-content-center';
        case 'space-around':
            return 'justify-content-around';
        case 'space-between':
            return 'justify-content-between ';
        default:
            return null;
    }
};


interface StackProps {
    direction?: FlexDirection;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    spacing?: string | number;
    wrap?:'wrap' | 'nowrap'
}
export const Stack = ({direction="row", justifyContent="flex-start", alignItems="flex-start", spacing=0, wrap='wrap', children}: PropsWithChildren<StackProps>) => {
    const classNames = clsx(
        'flex',
        getFlexDirectionClass(direction),
        getFlexJustifyContentClass(justifyContent),
        getFlexAlignItemsClass(alignItems),
        `gap-${spacing}`,
        wrap ? 'wrap' : 'nowrap',
    );

    return <Box className={classNames}>{children}</Box>
}