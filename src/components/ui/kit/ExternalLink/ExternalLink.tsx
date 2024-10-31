import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/src/components/ui/kit';
import type { ButtonVariants } from '@/src/components/ui/kit/Button/Button.variants.ts';

import type { ExternalLinkProps } from './ExternalLink.props';

const ExternalLink: VariableFC<
  typeof Link,
  ExternalLinkProps & ButtonVariants
> = ({ children, href, noIcon, variant = 'plastic', ...props }) => {
  return (
    <Link
      href={href}
      {...props}
    >
      <Button
        variant={variant}
        className={cn('flex-center gap-[.5em]')}
      >
        {children}
        {!noIcon && <MoveUpRight size='1em' />}
      </Button>
    </Link>
  );
};

export default ExternalLink;
