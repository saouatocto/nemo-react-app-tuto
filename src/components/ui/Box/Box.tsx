import React, { forwardRef } from 'react';
import { PolymorphicComponentPropsWithRef, PolymorphicRef } from 'utils/types';

type BoxProps<C extends React.ElementType> = PolymorphicComponentPropsWithRef<
  C,
  {
    children: React.ReactNode;
  }
>;

const Box = forwardRef(
  <C extends React.ElementType = 'div'>(
    { as, children, ...other }: BoxProps<C>,
    ref?: PolymorphicRef<C>,
  ) => {
    const Component = as || 'div';

    return (
      <Component {...other} ref={ref}>
        {children}
      </Component>
    );
  },
);

Box.displayName = 'Box';

export { Box };
