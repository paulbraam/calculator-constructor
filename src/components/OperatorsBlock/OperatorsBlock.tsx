import React from 'react';
import { Grid } from '@mui/material';
import { CalculatorButton } from '../CalculatorButton/CalculatorButton';
import { IBlockComponent, ICalculatorButtonProps, TCalculatorKey } from '../../types';
import { BlockWrapper } from '../BlockWrapper/BlockWrapper';
import { OPERATOR_KEYS } from '../../constants';

export const OperatorsBlock: React.FC<IBlockComponent> = ({ isBeingDragged, draggable }) => {
  return (
    <BlockWrapper enabled={draggable && !isBeingDragged}>
      <Grid container spacing={1} data-testid="operators-block">
        {OPERATOR_KEYS.map((operator: TCalculatorKey) => {
          const [name, value] = Object.entries(operator)[0];
          const props: ICalculatorButtonProps = { type: 'operator', name, value };
          return (
            <Grid key={value} item xs={3}>
              <CalculatorButton {...props} />
            </Grid>
          );
        })}
      </Grid>
    </BlockWrapper>
  );
};
