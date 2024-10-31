import type { VariableFC } from '@xenopomp/advanced-types';

import { ExternalLink } from '@/src/components/ui/kit';

const LinkButton: VariableFC<typeof ExternalLink, unknown, 'noIcon'> = ({
  children,
  ...props
}) => {
  return (
    <ExternalLink
      noIcon
      {...props}
    >
      {children}
    </ExternalLink>
  );
};

export default LinkButton;
