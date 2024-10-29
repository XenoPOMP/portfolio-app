import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';

const Button: VariableFC<'button'> = ({ className, children, ...props }) => {
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
