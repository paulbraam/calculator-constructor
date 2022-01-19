/**
 * Styling solution from
 * https://dev.to/atonchev/material-ui-5-the-easiest-way-to-migrate-from-makestyles-to-emotion-1i9l
 */

import { useMemo } from 'react';
import { css } from '@emotion/css';
import { useTheme } from '@emotion/react';
import { Theme } from '@mui/material';

type TStyles = (theme: Theme) => object | object;

interface IStylesElement {
  [key: string]: any;
}

export const useClasses = (styles: TStyles) => {
  const theme = useTheme() as Theme;
  return useMemo(() => {
    const rawClasses = typeof styles === 'function' ? styles(theme) : styles;
    const prepared: IStylesElement = {};

    Object.entries(rawClasses).forEach(([key, value = {}]) => {
      prepared[key] = css(value);
    });

    return prepared;
  }, [styles, theme]);
};
