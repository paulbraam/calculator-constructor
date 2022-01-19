import '@testing-library/jest-dom/extend-expect';
import { ResultActionBlock } from './ResultActionBlock';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';
import { IBlockComponent } from '../../types';

afterEach(() => cleanup());

test('should render ResultActionBlock component', () => {
  const props: IBlockComponent = { draggable: true, layout: 'sidebar', isBeingDragged: false };
  const { queryByTestId } = renderWithStore(<ResultActionBlock {...props} />);
  const root = queryByTestId('result-action-block');
  expect(root).toBeInTheDocument();
});
