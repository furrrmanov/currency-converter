import React from 'react';

import RouterLink from '@/components/controls/RouterLink';
import { Wrapper, Text } from './style';

export default function UnauthorizedUser() {
  return (
    <Wrapper>
      <Text>Unauthorized User</Text>
      <RouterLink to="singIn" >Sing-in</RouterLink>
    </Wrapper>
  );
}