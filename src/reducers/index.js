import { combineReducers } from 'redux';
import { keys, funcKeys } from './keyArr';
import {
	ADD_INPUT,
	CLEAR_INPUT,
	EVAL_INPUT,
	SELECT_INPUT,
} from '../actions/types';

const keysReducer = () => {
	return keys;
};

const funcKeyReducer = () => {
	return funcKeys;
};

const addInputReducer = (state = '', action) => {
	let arr = state.split('');
	let modInput = arr.map(ele => (ele === 'x' ? '*' : ele));
	let stringInput = modInput.join('');
	if (action.type === ADD_INPUT) {
		if (state.includes('=') && action.payload.match(/[0-9]/gm)) {
			return action.payload;
		} else if (state.includes('=') && action.payload.match(/[^.0-9]/gm)) {
			let returnValue = [...state].join('').match(/[^=\s-]+$/gm);
			return [returnValue, action.payload].join('');
		} else if (state.includes('=') && action.payload === '.') {
			return state;
		} else if (stringInput.match(/^0+/gm) && action.payload === '0') {
			return state;
		} else if (stringInput.match(/\.+$/gm) && action.payload === '.') {
			return state;
		} else if (
			stringInput.match(/[^0-9]{2,}$/gm) &&
			action.payload.match(/[^.0-9]/gm)
		) {
			let filteredArr = state.split('').filter(el => el.match(/[0-9]/gm));
			return [filteredArr, action.payload].join('');
		} else if (
			(stringInput.match(/[^0-9]$/gm) && action.payload === '+') ||
			(stringInput.match(/[^0-9]$/gm) && action.payload === 'x') ||
			(stringInput.match(/[^0-9]$/gm) && action.payload === '/')
		) {
			return [...state]
				.map((el, i) => (i === state.length - 1 ? action.payload : el))
				.join('');
		} else {
			return [...state, action.payload].join('');
		}
	} else if (action.type === CLEAR_INPUT) {
		return '';
	} else if (action.type === EVAL_INPUT) {
		if (!state) {
			return '';
		} else if (state.includes('=')) {
			return state;
		} else if (stringInput.match(/^-[0-9]+/gm)) {
			return state;
		} else if (stringInput.match(/^[^.\-0-9]|\.-[0-9]|[^0-9]$/gm)) {
			return state;
		} else if (stringInput.match(/-{2}/gm)) {
			let regex = stringInput.match(/-[0-9]/gm);
			let correctedStr = stringInput.replace(regex, `(${regex})`);
			// eslint-disable-next-line
			let returnValue = eval(correctedStr);
			return [...state, ' = ', returnValue].join('');
		} else {
			// eslint-disable-next-line
			let returnValue = eval(stringInput);
			return [...state, ' = ', returnValue].join('');
		}
	}
	return state;
};

const selectInputReducer = (state = '0', action) => {
	if (action.type === SELECT_INPUT) {
		if (
			state === '0' ||
			isNaN(state) ||
			(isNaN(action.payload) && action.payload !== '.')
		) {
			return action.payload;
		} else if (typeof state === 'number' && action.payload !== '.') {
			return action.payload;
		} else if (typeof state === 'number' && action.payload === '.') {
			return state;
		} else if (state.includes('.') && action.payload === '.') {
			return state;
		} else {
			return [...state, action.payload].join('');
		}
	} else if (action.type === CLEAR_INPUT) {
		return '0';
	} else if (action.type === EVAL_INPUT) {
		let modInput = action.payload
			.split('')
			.map(ele => (ele === 'x' ? '*' : ele));
		let stringInput = modInput.join('');
		if (state === '0') {
			return '0';
		} else if (modInput.includes('=')) {
			return state;
		} else if (stringInput.match(/^[^.\-0-9]|\.-[0-9]|[^0-9]$/gm)) {
			return state;
		} else if (stringInput.match(/-{2}/gm)) {
			let regex = stringInput.match(/-[0-9]/gm);
			let correctedStr = stringInput.replace(regex, `(${regex})`);
			// eslint-disable-next-line
			let returnValue = eval(correctedStr);
			return [...state, ' = ', returnValue].join('');
		} else {
			// eslint-disable-next-line
			return eval(stringInput);
		}
	}
	return state;
};

export default combineReducers({
	keys: keysReducer,
	funcKeys: funcKeyReducer,
	addInput: addInputReducer,
	selectInput: selectInputReducer,
});
