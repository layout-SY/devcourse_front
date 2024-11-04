import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ILogItem } from '../../types';

type TloggerState = {
	logArray: ILogItem[];
};

const initialState: TloggerState = {
	logArray: [],
};

const loggerSlice = createSlice({
	name: 'logger',
	initialState,
	reducers: {
		addLog: (state, { payload }: PayloadAction<ILogItem>) => {
			state.logArray.push(payload);
		},
	},
});

//default로 지정하면 {}를 하지 않아야 함.
//이렇게 지정하면 import 할 때 무조건 {}로 받아야함.
export const loggerReducer = loggerSlice.reducer;
export const { addLog } = loggerSlice.actions;
