import '@testing-library/jest-dom/extend-expect';
import { CalculatorButton } from './CalculatorButton';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';
import { ICalculatorButtonProps } from '../../types';

afterEach(() => cleanup());

test('should render CalculatorButton component', () => {
  const props: ICalculatorButtonProps = { value: '+', name: '+', type: 'operator' };
  const { queryByTestId } = renderWithStore(<CalculatorButton {...props} />);
  const root = queryByTestId('calculator-button');
  expect(root).toBeInTheDocument();
});
