import React, { useState } from 'react';

const MapTest = () => {
	const fruits = ['apple', 'orange', 'banana'];

	return (
		<div>
			<h2>과일</h2>
			<ul>
				{fruits.map((fruit, index) => {
					return <li key={index}>{fruit}</li>;
				})}
			</ul>
		</div>
	);
};

export default MapTest;
