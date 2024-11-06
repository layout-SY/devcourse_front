import React, { FC, useRef, useState } from 'react';
import { useTypedDispatch, useTypedSelector } from '../../hooks/redux';
import SideForm from './SideForm/SideForm';
import { FiLogIn, FiPlusCircle } from 'react-icons/fi';
import { addButton, addSection, boardItem, boardItemActive, container, title } from './BoardList.css';
import clsx from 'clsx';
import { GoSignOut } from 'react-icons/go';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from '../../firebase';
import { setUser } from '../../store/slices/userSlice';

type TBoardListProps = {
	activeBoardId: string;
	setActiveBoardId: React.Dispatch<React.SetStateAction<string>>;
};

const BoardList: FC<TBoardListProps> = ({ activeBoardId, setActiveBoardId }) => {
	const { boardArray } = useTypedSelector((state) => state.board);
	const [isFormOpen, setIsFormOpen] = useState(false);
	const inputRef = useRef<HTMLInputElement>(null);
	const auth = getAuth(app);
	const provider = new GoogleAuthProvider();
	const dispatch = useTypedDispatch();

	const handleClick = () => {
		setIsFormOpen(!isFormOpen);
		setTimeout(() => {
			inputRef.current?.focus();
		}, 0);
	};

	const handleLogin = () => {
		signInWithPopup(auth, provider)
			.then((userCredential) => {
				console.log(`User ${userCredential}`);

				dispatch(
					setUser({
						email: userCredential.user.email,
						id: userCredential.user.uid,
					})
				);
			})
			.catch((e) => e);
	};

	return (
		<div className={container}>
			<div className={title}>게시판 :</div>
			{boardArray.map((board, index) => (
				<div
					key={board.boardId}
					onClick={() => setActiveBoardId(boardArray[index].boardId)}
					className={clsx(
						{
							[boardItemActive]: boardArray.findIndex((b) => b.boardId === activeBoardId) === index,
						},
						{
							[boardItem]: boardArray.findIndex((b) => b.boardId === activeBoardId) !== index,
						}
					)}
				>
					<div>{board.boardName}</div>
				</div>
			))}
			<div className={addSection}>
				{isFormOpen ? (
					<SideForm inputRef={inputRef} setIsFormOpen={setIsFormOpen} />
				) : (
					<FiPlusCircle className={addButton} onClick={handleClick} />
				)}

				<GoSignOut className={addButton} />
				<FiLogIn className={addButton} onClick={handleLogin} />
			</div>
		</div>
	);
};

export default BoardList;
