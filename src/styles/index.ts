/*
Copyright (c) Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
import { ThemeContext } from './theme-provider';

export { default as ThemeProvider, type ThemeProviderProps } from './theme-provider';
export const ThemeConsumer = ThemeContext.Consumer;
export * from './types';
