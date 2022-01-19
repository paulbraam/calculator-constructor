import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { layoutsReducer } from './reducers/layouts/layoutsReducer';
import { modeReducer } from './reducers/mode/modeReducer';
import { calculatorReducer } from './reducers/calculator/calculatorReducer';

const rootReducer = combineReducers({
  layouts: layoutsReducer,
  mode: modeReducer,
  calculator: calculatorReducer
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer
  });
};

export const store = setupStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
