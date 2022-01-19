import React from 'react';
import { Grid } from '@mui/material';
import { CalculatorButton } from '../CalculatorButton/CalculatorButton';
import { IBlockComponent, TCalculatorKey, ICalculatorButtonProps } from '../../types';
import { BlockWrapper } from '../BlockWrapper/BlockWrapper';
import { NUMBER_KEYS } from '../../constants';

export const NumbersBlock: React.FC<IBlockComponent> = ({ draggable, isBeingDragged }) => {
  return (
    <BlockWrapper enabled={draggable && !isBeingDragged}>
      <Grid container spacing={1} data-testid="numbers-block">
        {NUMBER_KEYS.map((number: TCalculatorKey) => {
          const [name, value] = Object.entries(number)[0];
          const props: ICalculatorButtonProps = { type: 'digit', name, value };
          const width = name === '0' ? 8 : 4;
          return (
            <Grid key={value} item xs={width}>
              <CalculatorButton {...props} />
            </Grid>
          );
        })}
      </Grid>
    </BlockWrapper>
  );
};
