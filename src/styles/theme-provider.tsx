import * as React from 'react';
import { LightTheme } from '../themes';

import type { Theme } from './types';

export const ThemeContext: React.Context<Theme> = React.createContext(LightTheme);

export type ThemeProviderProps = { theme: Theme };
const ThemeProvider: React.FC<ThemeProviderProps> = (props) => {
  const { theme, children } = props;
  return <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
};

export default ThemeProvider;
