import React from 'react';
import Display from './Display';
import Keypad from './Keypad';

const Calculator = () => {
	return (
		<div id='calculator' className='ui segments'>
			<Display />
			<Keypad />
		</div>
	);
};

export default Calculator;
