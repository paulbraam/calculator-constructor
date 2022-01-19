import '@testing-library/jest-dom/extend-expect';
import { DisplayBlock } from './DisplayBlock';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';
import { IBlockComponent } from '../../types';

afterEach(() => cleanup());

test('should render DisplayBlock component', () => {
  const props: IBlockComponent = { draggable: true, layout: 'sidebar', isBeingDragged: false };
  const { queryByTestId } = renderWithStore(<DisplayBlock {...props} />);
  const root = queryByTestId('display-block');
  expect(root).toBeInTheDocument();
});
