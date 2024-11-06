import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IBoard, IList, ITask } from '../../types';

type TBoardState = {
	modalActive: boolean;
	boardArray: IBoard[];
};

type TAddBoardAction = {
	board: IBoard;
};

type TDeleteListAction = {
	boardId: string;
	listId: string;
};

type TAddListAction = {
	boardId: string;
	list: IList;
};

type TAddTaskAction = {
	boardId: string;
	listId: string;
	task: ITask;
};

type TDeleteTaskAction = {
	boardId: string;
	listId: string;
	taskId: string;
};

type TDeleteBoardAction = {
	boardId: string;
};

type TSortAction = {
	boardIndex: number;
	droppableIdStart: string;
	droppableIdEnd: string;
	droppableIndexStart: number;
	droppableIndexEnd: number;
	draggableId: string;
};

const initialState: TBoardState = {
	modalActive: false,
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
	reducers: {
		addBoard: (state, { payload }: PayloadAction<TAddBoardAction>) => {
			state.boardArray.push(payload.board); //불변성 신경 안써도 됨
		},

		addList: (state, { payload }: PayloadAction<TAddListAction>) => {
			state.boardArray.map((board) =>
				board.boardId === payload.boardId ? { ...board, lists: board.lists.push(payload.list) } : board
			);
		},

		addTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
			state.boardArray = state.boardArray.map((board) => {
				if (board.boardId === payload.boardId) {
					return {
						...board,
						lists: board.lists.map((list) => {
							if (list.listId === payload.listId) {
								return {
									...list,
									tasks: [...list.tasks, payload.task],
								};
							}
							return list;
						}),
					};
				}
				return board;
			});
		},

		updateTask: (state, { payload }: PayloadAction<TAddTaskAction>) => {
			state.boardArray = state.boardArray.map((board) =>
				board.boardId === payload.boardId
					? {
							...board,
							lists: board.lists.map((list) => {
								if (list.listId === payload.listId) {
									return {
										...list,
										tasks: list.tasks.map((task) =>
											task.taskId === payload.task.taskId ? payload.task : task
										),
									};
								}
								return list;
							}),
					  }
					: board
			);
		},

		deleteTask: (state, { payload }: PayloadAction<TDeleteTaskAction>) => {
			state.boardArray = state.boardArray.map((board) =>
				board.boardId === payload.boardId
					? {
							...board,
							lists: board.lists.map((list) => {
								if (list.listId === payload.listId) {
									return {
										...list,
										tasks: list.tasks.filter((task) => task.taskId !== payload.taskId),
									};
								}
								return list;
							}),
					  }
					: board
			);
		},

		deleteList: (state, { payload }: PayloadAction<TDeleteListAction>) => {
			state.boardArray = state.boardArray.map((board) =>
				board.boardId === payload.boardId
					? {
							...board,
							lists: board.lists.filter((list) => list.listId !== payload.listId),
					  }
					: board
			);
		},

		deleteBoard: (state, { payload }: PayloadAction<TDeleteBoardAction>) => {
			state.boardArray = state.boardArray.filter((board) => board.boardId !== payload.boardId);
		},

		setModalActive: (state, { payload }: PayloadAction<boolean>) => {
			state.modalActive = payload;
		},

		sort: (state, { payload }: PayloadAction<TSortAction>) => {
			if (payload.droppableIdStart === payload.droppableIdEnd) {
				const list = state.boardArray[payload.boardIndex].lists.find(
					(list) => list.listId === payload.droppableIdStart
				);

				const card = list?.tasks.splice(payload.droppableIndexStart, 1);
				list?.tasks.splice(payload.droppableIndexEnd, 0, ...card!);
			}

			if (payload.droppableIdStart !== payload.droppableIdEnd) {
				const listStart = state.boardArray[payload.boardIndex].lists.find(
					(list) => list.listId === payload.droppableIdStart
				);

				const card = listStart!.tasks.splice(payload.droppableIndexStart, 1);
				const listEnd = state.boardArray[payload.boardIndex].lists.find(
					(list) => list.listId === payload.droppableIdEnd
				);
				listEnd?.tasks.splice(payload.droppableIndexEnd, 0, ...card!);
			}
		},
	},
});

export const { sort, addBoard, deleteList, deleteTask, deleteBoard, updateTask, setModalActive, addList, addTask } =
	boardsSlice.actions;
export const boardReducer = boardsSlice.reducer;
