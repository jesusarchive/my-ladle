import type * as React from 'react';
import type { KIND, SHAPE, SIZE } from './constants';

export type ButtonProps = {
  children?: React.ReactNode;
  disabled?: boolean;
  kind?: keyof typeof KIND;
  onClick?: (a: React.SyntheticEvent<HTMLButtonElement>) => unknown;
  /** Defines the shape of the button */
  shape?: keyof typeof SHAPE;
  /** Defines the size of the button */
  size?: keyof typeof SIZE;
  type?: 'submit' | 'reset' | 'button';
};

export type SharedStyleProps = {
  $kind?: keyof typeof KIND;
  $shape?: keyof typeof SHAPE;
  $size?: keyof typeof SIZE;
  $disabled?: boolean;
};
