import { withDrag } from './withDrag';
import { DisplayBlock } from '../DisplayBlock/DisplayBlock';
import '@testing-library/jest-dom/extend-expect';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';
import { IDragItemProps } from '../../types';

afterEach(() => cleanup());

test('should render component with drag wrapper', () => {
  const Component = withDrag(DisplayBlock);
  const props: IDragItemProps = { id: 'display', draggable: true, layout: 'sidebar' };
  const { queryByTestId } = renderWithStore(<Component {...props} />);
  const root = queryByTestId('with-drag');
  expect(root).toBeInTheDocument();
});
