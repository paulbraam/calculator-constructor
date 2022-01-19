import { Button, Typography } from '@mui/material';
import { useAppDispatch } from '../../hooks/useAppDispatch';
import { ICalculatorButtonProps } from '../../types';
import { addDigit, calculate } from '../../store/reducers/calculator/calculatorReducer';
import { TOperator } from '../../types';
import { useClasses } from '../../hooks/useClasses';
import { styles } from './CalculatorButton.styles';

export const CalculatorButton: React.FC<ICalculatorButtonProps> = ({ value, name, type }) => {
  const dispatch = useAppDispatch();
  const classes = useClasses(styles);

  const handleClick = (value: string) => {
    const action = type === 'operator' ? calculate(value as TOperator) : addDigit(value);
    dispatch(action);
  };

  return (
    <Button
      data-testid="calculator-button"
      variant="outlined"
      color="secondary"
      className={classes.root}
      disableElevation
      fullWidth
      onClick={() => handleClick(value)}>
      <Typography variant="body1">{name}</Typography>
    </Button>
  );
};
