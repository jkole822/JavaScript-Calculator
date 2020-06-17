import React from 'react';
import History from './History';
import Input from './Input';

const Display = () => {
	return (
		<div id='calcDisplay' className='ui right aligned segment'>
			<History />
			<Input />
		</div>
	);
};

export default Display;
