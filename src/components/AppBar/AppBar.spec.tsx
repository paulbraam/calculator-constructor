import '@testing-library/jest-dom/extend-expect';
import { AppBar } from './AppBar';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';

afterEach(() => cleanup());

test('should render AppBar component', () => {
  const { queryByTestId } = renderWithStore(<AppBar />);
  const root = queryByTestId('app-bar');
  expect(root).toBeInTheDocument();
});
