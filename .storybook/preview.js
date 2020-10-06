import React from 'react';
import { ThemeProvider } from 'styled-components';
import { themes } from '@combase/styles';

export const decorators = [(Story) => (
    <ThemeProvider theme={themes.light}>
        <Story />
    </ThemeProvider>
)];

export const parameters = {
  layout: 'centered',
};
