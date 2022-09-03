import * as React from 'react';
import 'tailwindcss/tailwind.css';
import BaseProvider from '../src/helpers/base-provider.js';
import { DarkTheme, LightTheme } from '../src/themes/index.js';

export const Provider: React.FC<{
  globalState: {
    theme: string;
  };
}> = ({ children, globalState }) => {
  return (
    <BaseProvider
      theme={{
        ...(globalState.theme === 'dark' ? DarkTheme : LightTheme),
      }}
    >
      {children}
    </BaseProvider>
  );
};
