import React from 'react';
import Paper from '@mui/material/Card';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useClasses } from '../../hooks/useClasses';
import { styles } from './BlockWrapper.styles';
import { IBlockWrapperProps } from '../../types';

export const BlockWrapper: React.FC<IBlockWrapperProps> = ({ enabled, children }) => {
  const mode = useAppSelector(state => state.mode.value);
  const classes = useClasses(styles);

  const wrapperClasses = [classes.root];
  wrapperClasses.push(enabled ? classes.enabled : classes.disabled);

  return (
    <Paper
      data-testid="block-wrapper"
      elevation={0}
      className={wrapperClasses.join(' ')}
      sx={{ pointerEvents: mode === 'Runtime' ? 'auto' : 'none' }}>
      {children}
    </Paper>
  );
};
