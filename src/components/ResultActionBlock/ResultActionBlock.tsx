import React from 'react';
import Button from '@mui/material/Button';
import { IBlockComponent } from '../../types';
import { BlockWrapper } from '../BlockWrapper/BlockWrapper';
import { calculate } from '../../store/reducers/calculator/calculatorReducer';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { useClasses } from '../../hooks/useClasses';
import { styles } from './ResultActionBlock.styles';

export const ResultActionBlock: React.FC<IBlockComponent> = ({ isBeingDragged, draggable }) => {
  const dispatch = useAppDispatch();
  const classes = useClasses(styles);
  const showResult = () => dispatch(calculate());
  return (
    <BlockWrapper enabled={draggable && !isBeingDragged}>
      <Button
        data-testid="result-action-block"
        variant="contained"
        disableElevation
        fullWidth
        className={classes.root}
        onClick={showResult}>
        =
      </Button>
    </BlockWrapper>
  );
};
