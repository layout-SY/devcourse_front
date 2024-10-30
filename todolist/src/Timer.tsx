import { useState } from 'react';

const Timer: React.FC = () => {
	const [time, setTime] = useState(new Date());

	setInterval(() => {
		setTime(new Date());
	}, 1000);

	return (
		<div>
			현재 시간 : {time.toLocaleTimeString()}
			{/* <button
				onClick={function () {
					setInterval(() => {
						setSeconds((prev) => {
							return prev + 1;
						});
					}, 1000);
				}}
			>
				Start
			</button> */}
		</div>
	);
};

export default Timer;
