import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

import { type ButtonVariants, buttonVariants } from './Button.variants.ts';

const Button: VariableFC<'button', ButtonVariants> = ({
  className,
  children,
  variant,
  ...props
}) => {
  return (
    <button
      type='button'
      className={cn(
        buttonVariants({
          variant,
        }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
