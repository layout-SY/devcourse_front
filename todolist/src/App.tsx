import React from 'react';
import './App.css';
import ClassCom from './ClassCom';
import FuncCom from './FuncCom';
import TodoList from './Todolist';
import MapTest from './MapTest';

// function App() {
// 	return (
// 		<div className="App-header">
// 			<h1>Hello, 리액트 !!</h1>
// 			<p>반갑습니다.</p>
// 		</div>
// 	);
// }
// function App() {
// 	return React.createElement('div', null, 'Hello, 리액트', React.createElement('p', null, '반갑습니다'));
// }

function App() {
	// let name = '리액트';
	// const style = {
	// 	backgroundColor: '#FFFFFF',
	// 	color: 'black',
	// 	fontSize: '24px',
	// 	fontWeight: 'bold',
	// 	padding: '20px',
	// };

	return (
		<div className="container">
			{/* <h1 className="test">
				Hello,
				{name === '리액트' ? <h1>Yes</h1> : <h1>No</h1>}!!
			</h1>
			<p style={style}>반갑습니다.</p>
			주석문 작성 */}
			<ClassCom></ClassCom>
			<FuncCom></FuncCom>
			<TodoList></TodoList>
			<MapTest></MapTest>
		</div>
	);
	// const port = undefined;
	// return <div>{port || '포트를 설정하지 않았습니다.'}</div>;
}
export default App;
