import '@testing-library/jest-dom/extend-expect';
import { CalculatorLayout } from './CalculatorLayout';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';
import { ILayoutProps } from '../../types';

afterEach(() => cleanup());

test('should render CalculatorLayout component', () => {
  const props: ILayoutProps = { layout: 'sidebar' };
  const { queryByTestId } = renderWithStore(<CalculatorLayout {...props} />);
  const root = queryByTestId('calculator-layout');
  expect(root).toBeInTheDocument();
});
