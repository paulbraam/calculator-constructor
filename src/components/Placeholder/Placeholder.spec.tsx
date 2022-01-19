import '@testing-library/jest-dom/extend-expect';
import { Placeholder } from './Placeholder';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';

afterEach(() => cleanup());

test('should render Placeholder component', () => {
  const { queryByTestId } = renderWithStore(<Placeholder />);
  const root = queryByTestId('placeholder-block');
  expect(root).toBeInTheDocument();
});
