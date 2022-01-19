import '@testing-library/jest-dom/extend-expect';
import { Notification } from './Notification';
import { cleanup, render } from '@testing-library/react';

jest.mock('../../hooks/useNotification', () => ({
  useNotification: () => ({
    open: true
  })
}));

afterEach(() => cleanup());

test('should render Notification component', () => {
  const { queryByTestId } = render(<Notification />);
  const root = queryByTestId('notification');
  expect(root).toBeInTheDocument();
});
