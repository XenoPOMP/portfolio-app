import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/src/components/ui/kit';

import type { ExternalLinkProps } from './ExternalLink.props';

const ExternalLink: VariableFC<typeof Link, ExternalLinkProps> = ({
  children,
  href,
  noIcon,
  ...props
}) => {
  return (
    <Link
      href={href}
      {...props}
    >
      <Button
        variant='plastic'
        className={cn('flex-center gap-[.5em]')}
      >
        {children}
        {!noIcon && <MoveUpRight size='1em' />}
      </Button>
    </Link>
  );
};

export default ExternalLink;
