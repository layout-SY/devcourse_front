import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import TodoModal from './TodoModal';

const TodoList: React.FC = () => {
	const title: string = '오늘 할 일';
	type Todo = {
		id: number;
		text: string;
		isChecked: boolean;
	};
	const [todos, setTodos] = useState<Todo[]>([
		{ id: 1, text: '공부하기', isChecked: false },
		{ id: 2, text: '잠자기', isChecked: false },
		{ id: 3, text: '미팅하기', isChecked: false },
	]);

	const [newTodo, setNewTodo] = useState<string>('');
	const [showDetail, setShowDetail] = useState<boolean>(false);
	const [selectedTodo, setSelectedTodo] = useState<Todo | null>(null);

	const handleCheckedChange = (itemId: number) => {
		setTodos((prev) => {
			return prev.map((todo) => {
				if (todo.id === itemId) {
					return { ...todo, isChecked: !todo.isChecked };
				}
				return todo;
			});
		});
	};

	const addTodo = () => {
		if (newTodo.trim() !== '') {
			setTodos((prev) => [...prev, { id: Date.now(), text: newTodo, isChecked: false }]);
			setNewTodo('');
		}
	};

	const removeTodo = (id: number) => {
		setTodos(todos.filter((item) => item.id !== id));
	};

	const handleTodoClick = (todo: Todo) => {
		setShowDetail(true);
		setSelectedTodo(todo);
	};

	const handleCloseDetail = () => {
		setShowDetail(false);
		setSelectedTodo(null);
	};

	return (
		<div className="container">
			<h1>{title}</h1>
			<p></p>
			<div className="container">
				<div>
					<input
						type="text"
						placeholder="할 일 입력"
						style={{ marginRight: '10px', writingMode: 'horizontal-tb' }}
						onChange={(e) => setNewTodo(e.target.value)}
					/>
					<Button variant="warning" onClick={addTodo}>
						버튼
					</Button>
				</div>
				<p></p>
				<ul className="board">
					{todos.map((todo, index) => {
						return (
							<div>
								<li key={index}>
									<input type="checkbox" onChange={() => handleCheckedChange(todo.id)}></input>
									<span onClick={() => handleTodoClick(todo)}>
										{todo.isChecked ? <del>{todo.text}</del> : todo.text}
									</span>
									<Button variant="primary" size="sm" onClick={() => removeTodo(todo.id)}>
										삭제
									</Button>
								</li>
							</div>
						);
					})}
				</ul>
			</div>
			<TodoModal handleClose={handleCloseDetail} show={showDetail} todo={selectedTodo}></TodoModal>
		</div>
	);
};

export default TodoList;
