import type { PropsWith } from '@xenopomp/advanced-types';
import cn from 'classnames';
import type { CSSProperties, FC } from 'react';

import styles from './UiContainer.module.scss';
import type { UiContainerProps } from './UiContainer.props';

interface UiContainerNestedProps
  extends PropsWith<
    'children' | 'className' | 'id' | 'style',
    UiContainerProps
  > {}

const UiContainer: FC<UiContainerNestedProps> = ({
  children,
  className,
  id,
  style,
  margin = 'calc(var(--p-level-1) * 1.6)',
  maxWidth = '1240px',
  as = 'section',
}) => {
  const Component = as;

  return (
    <Component
      style={
        {
          '--max-container-width': maxWidth,
          '--margin': margin,
          ...style,
        } as CSSProperties
      }
      className={cn(styles.uiContainer, className)}
      id={id}
    >
      {children}
    </Component>
  );
};

export default UiContainer;
