import type * as React from 'react';
import type { Theme } from '../styles/types';

export type BaseProviderProps = {
  /** Children element to be rendered. Normally the BaseProvider
   should be added at the top level of an application. */
  children: React.ReactNode | undefined | null;
  /** The base theme to be used in the application. */
  theme: Theme;
};
