import '@testing-library/jest-dom/extend-expect';
import { CalculatorBuilder } from './CalculatorBuilder';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';

afterEach(() => cleanup());

test('should render Calculator component', () => {
  const { queryByTestId } = renderWithStore(<CalculatorBuilder />);
  const root = queryByTestId('calculator-builder');
  expect(root).toBeInTheDocument();
});
