import '@testing-library/jest-dom/extend-expect';
import { BlockWrapper } from './BlockWrapper';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';

afterEach(() => cleanup());

test('should render BlockWrapper component', () => {
  const { queryByTestId } = renderWithStore(
    <BlockWrapper enabled={true}>
      <div />
    </BlockWrapper>
  );
  const root = queryByTestId('block-wrapper');
  expect(root).toBeInTheDocument();
});
