import type { VariableFC } from '@xenopomp/advanced-types';

import { LinkButton } from '@/src/components/ui/kit';

const SocialButton: VariableFC<
  typeof LinkButton,
  unknown,
  'children' | 'variant'
> = ({ ...props }) => {
  return (
    <LinkButton
      variant='social'
      {...props}
    >
      ...
    </LinkButton>
  );
};

export default SocialButton;
