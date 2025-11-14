export const COLORS = {
  primary: '#673de6',
  dark: '#222222',
  white: '#FFFFFF',
} as const;

export type ColorKeys = keyof typeof COLORS;