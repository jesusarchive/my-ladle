import * as React from 'react';
import { defaultProps } from './default-props';
import type { ButtonProps } from './types';

const Button = React.forwardRef(({ size, kind, shape, children }: ButtonProps, ref) => {
  return <button ref={ref}>{children}</button>;
});

Button.defaultProps = defaultProps;

Button.displayName = 'Button';

export default Button;
