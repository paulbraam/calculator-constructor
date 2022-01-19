import '@testing-library/jest-dom/extend-expect';
import { OperatorsBlock } from './OperatorsBlock';
import { cleanup } from '@testing-library/react';
import { renderWithStore } from '../../../testing-setup';
import { IBlockComponent } from '../../types';

afterEach(() => cleanup());

test('should render OperatorsBlock component', () => {
  const props: IBlockComponent = { draggable: true, layout: 'sidebar', isBeingDragged: false };
  const { queryByTestId } = renderWithStore(<OperatorsBlock {...props} />);
  const root = queryByTestId('operators-block');
  expect(root).toBeInTheDocument();
});
