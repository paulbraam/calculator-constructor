import '@testing-library/jest-dom/extend-expect';
import { NumbersBlock } from './NumbersBlock';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';
import { IBlockComponent } from '../../types';

afterEach(() => cleanup());

test('should render NumbersBlock component', () => {
  const props: IBlockComponent = { draggable: true, layout: 'sidebar', isBeingDragged: false };
  const { queryByTestId } = renderWithStore(<NumbersBlock {...props} />);
  const root = queryByTestId('numbers-block');
  expect(root).toBeInTheDocument();
});
