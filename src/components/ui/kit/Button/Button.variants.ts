import { type VariantProps, cva } from 'class-variance-authority';
import cn from 'classnames';

import styles from './Button.module.scss';

export const buttonVariants = cva(styles.uiButton, {
  variants: {
    variant: {
      plastic: cn(styles.plastic),
      social: cn(styles.social),
    },
  },
});

export type ButtonVariants = VariantProps<typeof buttonVariants>;
