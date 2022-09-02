import * as React from 'react';
import { ThemeProvider } from '../styles';
import type { BaseProviderProps } from './types';

const BaseProvider = (props: BaseProviderProps) => {
  const { children, theme} = props;
  return (
        <ThemeProvider theme={theme}>{children}</ThemeProvider>
  );
};

export default BaseProvider;
