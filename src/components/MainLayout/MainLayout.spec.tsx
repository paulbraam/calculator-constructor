import '@testing-library/jest-dom/extend-expect';
import { MainLayout } from './MainLayout';
import { cleanup, render } from '@testing-library/react';

afterEach(() => cleanup());

test('should render MainLayout component', () => {
  const { queryByTestId } = render(<MainLayout />);
  const root = queryByTestId('main-layout');
  expect(root).toBeInTheDocument();
});
