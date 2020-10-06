import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { themes } from '@combase/styles';
import { Button } from '@combase/ui';

const Root = styled.div`
  background-color: ${({ theme }) => theme.color.background};
`;

const App = () => (
  <ThemeProvider theme={themes.light}>
    <Root>
      <Button>
        {"Button Label"}
      </Button>
    </Root>
  </ThemeProvider>
);

export default App;
