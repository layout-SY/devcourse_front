import { createSlice } from '@reduxjs/toolkit';
import { IBoard } from '../../types';

type TBoardState = {
	modalActivity: boolean;
	boardArray: IBoard[];
};

const initialState: TBoardState = {
	modalActivity: false,
	boardArray: [
		{
			boardId: 'board-0',
			boardName: '첫 번째 게시물',
			lists: [
				{
					listId: 'list-0',
					listName: 'List 1',
					tasks: [
						{
							taskId: 'task-0',
							taskName: 'task-1',
							taskDescription: 'Description',
							taskOwner: 'Cho',
						},
						{
							taskId: 'task-1',
							taskName: 'task-2',
							taskDescription: 'Description2',
							taskOwner: 'Cho2',
						},
					],
				},
				{
					listId: 'list-1',
					listName: 'List 2',
					tasks: [
						{
							taskId: 'task-2',
							taskName: 'task-3',
							taskDescription: 'Description3',
							taskOwner: 'Cho3',
						},
						{
							taskId: 'task-3',
							taskName: 'task-4',
							taskDescription: 'Description4',
							taskOwner: 'Cho4',
						},
					],
				},
			],
		},
	],
};

const boardsSlice = createSlice({
	name: 'boards',
	initialState,
	reducers: {},
});

export const boardReducer = boardsSlice.reducer;
