import { ADD_INPUT, CLEAR_INPUT, EVAL_INPUT, SELECT_INPUT } from './types';

export const addInput = input => {
	return {
		type: ADD_INPUT,
		payload: input,
	};
};

export const clearInput = () => {
	return {
		type: CLEAR_INPUT,
	};
};

export const evalInput = result => {
	return {
		type: EVAL_INPUT,
		payload: result,
	};
};

export const selectInput = input => {
	return {
		type: SELECT_INPUT,
		payload: input,
	};
};
