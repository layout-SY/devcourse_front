import { useState } from 'react';
import './App.css';
import { appContainer, board, buttons, deleteBoardButton, loggerButton } from './App.css.ts';
import BoardList from './components/BoardList/BoardList.tsx';
import ListsContainer from './components/ListsContainer/ListsContainer.tsx';
import { useTypedSelector } from './hooks/redux.ts';
import EditModal from './components/EditModal/EditModal.tsx';
import LoggerModal from './components/LoggerModal/LoggerModal.tsx';

function App() {
	const [isLoggerOpen, setIsLoggerOpen] = useState(false);
	const [activeBoardId, setActiveBoardId] = useState('board-0');
	const modalActive = useTypedSelector((state) => state.board.modalActive);
	const boards = useTypedSelector((state) => state.board.boardArray);

	const getActiveBoard = boards.filter((board) => board.boardId === activeBoardId)[0];

	const lists = getActiveBoard.lists;

	return (
		<div className={appContainer}>
			{isLoggerOpen ? <LoggerModal setIsLoggerOpen={setIsLoggerOpen} /> : null}
			{modalActive ? <EditModal /> : null}

			<BoardList activeBoardId={activeBoardId} setActiveBoardId={setActiveBoardId} />
			<div className={board}>
				<ListsContainer lists={lists} boardId={getActiveBoard.boardId} />
			</div>
			<div className={buttons}>
				<button className={deleteBoardButton}>이 게시판 삭제하기</button>
				<button
					onClick={() => {
						setIsLoggerOpen(!isLoggerOpen);
					}}
					className={loggerButton}
				>
					{isLoggerOpen ? '활동 목록 숨기기' : '활동 목록 보이기'}
				</button>
			</div>
		</div>
	);
}

export default App;
