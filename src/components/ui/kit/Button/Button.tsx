import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import type { ButtonVariants } from './Button.variants.ts';

const Button: VariableFC<'button', ButtonVariants> = ({
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <button
      type='button'
      className={cn(className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
