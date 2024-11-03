import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	modalActivity: false,
	boardArray: [],
};

const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {},
});

export const boardReducer = boardsSlice.reducer;
