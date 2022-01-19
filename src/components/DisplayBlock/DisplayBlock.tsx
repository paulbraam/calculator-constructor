import React from 'react';
import { Paper, Typography } from '@mui/material';
import { IBlockComponent } from '../../types';
import { BlockWrapper } from '../BlockWrapper/BlockWrapper';
import { useAppSelector } from '../../hooks/useAppSelector';
import { useClasses } from '../../hooks/useClasses';
import { styles } from './DisplayBlock.styles';
import { formatResult, formatInput, setFontSize } from '../../utils';

export const DisplayBlock: React.FC<IBlockComponent> = ({ isBeingDragged, draggable, layout }) => {
  const classes = useClasses(styles);
  const calculator = useAppSelector(state => state.calculator);

  const input = formatInput(calculator.input);
  const result = formatResult(calculator.result);
  const displayValue = input || result;

  const enabled = (draggable || layout === 'builder') && !isBeingDragged;

  return (
    <BlockWrapper enabled={enabled}>
      <Paper elevation={0} className={classes.frame} data-testid="display-block">
        <Typography
          variant="h5"
          component="h2"
          className={classes.value}
          sx={{
            fontSize: setFontSize(displayValue)
          }}>
          {displayValue}
        </Typography>
      </Paper>
    </BlockWrapper>
  );
};
