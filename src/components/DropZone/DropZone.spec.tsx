import '@testing-library/jest-dom/extend-expect';
import { DropZone } from './DropZone';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';

afterEach(() => cleanup());

test('should render DropZone component', () => {
  const { queryByTestId } = renderWithStore(<DropZone />);
  const root = queryByTestId('drop-zone');
  expect(root).toBeInTheDocument();
});
