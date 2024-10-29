import type { VariableFC } from '@xenopomp/advanced-types';
import cn from 'classnames';
import { MoveUpRight } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/src/components/ui/kit';

const ExternalLink: VariableFC<typeof Link> = ({
  children,
  href,
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
        <MoveUpRight size='1em' />
      </Button>
    </Link>
  );
};

export default ExternalLink;
