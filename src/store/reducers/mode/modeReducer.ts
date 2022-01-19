import { createAction, createReducer } from '@reduxjs/toolkit';
import { TMode } from '../../../types';

interface IModeState {
  value: TMode;
}

const initialState: IModeState = {
  value: 'Constructor'
};

export const setMode = createAction<TMode>('mode/setMode');

export const modeReducer = createReducer(initialState, builder => {
  builder.addCase(setMode, (state: IModeState, action) => {
    state.value = action.payload;
  });
});
