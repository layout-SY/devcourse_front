import { useState } from 'react';
import './App.css';
import { appContainer, board, buttons } from './App.css.ts';
import BoardList from './components/BoardList/BoardList.tsx';
import ListsContainer from './components/ListsContainer/ListsContainer.tsx';
import { useTypedSelector } from './hooks/redux.ts';
import EditModal from './components/EditModal/EditModal.tsx';

function App() {
	const [activeBoardId, setActiveBoardId] = useState('board-0');
	const modalActive = useTypedSelector((state) => state.board.modalActive);
	const boards = useTypedSelector((state) => state.board.boardArray);

	const getActiveBoard = boards.filter((board) => board.boardId === activeBoardId)[0];

	const lists = getActiveBoard.lists;

	return (
		<div className={appContainer}>
			{modalActive ? <EditModal /> : null}

			<BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId} />
			<div className={board}>
				<ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
			</div>
			<div className={buttons}>
				<button>이 게시판 삭제하기</button>
			</div>
		</div>
	);
}

export default App;
