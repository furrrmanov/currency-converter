import React from 'react';
import NavigationBar from '@/components/blocks/AppBar/component';

import { Wrapper } from './style';

export default function BasicLayout({ children }) {
  return(
    <Wrapper>
      <NavigationBar />
      {children}
    </Wrapper>
  );
}