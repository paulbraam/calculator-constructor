import { createAction, createReducer } from '@reduxjs/toolkit';
import { ICalculatorProps, TOperator } from '../../../types';

const initialState: ICalculatorProps = {
  input: '',
  result: 0,
  operator: undefined
};

export const addDigit = createAction<string>('calculator/addDigit');
export const addOperator = createAction<TOperator>('calculator/addOperator');
export const calculate = createAction<TOperator | undefined>('calculator/calculate');

export const calculatorReducer = createReducer(initialState, builder => {
  builder.addCase(addDigit, (state: ICalculatorProps, action) => {
    state.input = state.input + action.payload;
  });
  builder.addCase(calculate, (state: ICalculatorProps, action) => {
    const { result, input, operator } = state;
    state.operator = action.payload;
    if (input) {
      const value = Number(input);
      switch (operator) {
        case '/':
          state.result = result / value;
          break;
        case '*':
          state.result = result * value;
          break;
        case '+':
          state.result = result + value;
          break;
        case '-':
          state.result = result - value;
          break;
        default:
          state.result = value;
      }
      state.input = '';
    }
  });
});
