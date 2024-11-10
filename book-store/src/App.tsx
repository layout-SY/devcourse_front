import Header from './components/Header';
import Home from './pages/Home';
import { formatNumber } from './utils/format';

const COUNT = 1000;

function App() {
	return (
		<div>
			<Home />
			<Header />
			<div>book store</div>
			<div>count: {formatNumber(COUNT)}</div>
		</div>
	);
}

export default App;
