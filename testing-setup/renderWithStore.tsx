import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { store } from '../src/store';
import { Provider } from 'react-redux';

export const renderWithStore = (
  ui: React.ReactElement,
  { ...renderOptions } = {}
): RenderResult => {
  const uiWithState = <Provider store={store}>{ui}</Provider>;
  return render(uiWithState, { ...renderOptions });
};
