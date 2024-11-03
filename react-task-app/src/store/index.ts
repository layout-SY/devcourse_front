import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer/reducer';

const store = configureStore({
	reducer: reducer,
});

//type A = ReturnType<() => string>;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// useAppSelector
// useTypeSelector

export default store;
