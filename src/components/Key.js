import React from 'react';
import { connect } from 'react-redux';
import { addInput, selectInput, clearInput } from '../actions';

class Key extends React.Component {
	handleClick = () => {
		if (this.props.buttonKey.value === 'AC') {
			return this.props.clearInput();
		}
		this.props.addInput(this.props.buttonKey.value);
		this.props.selectInput(this.props.buttonKey.value);
	};

	specifyButtonWidth = () => {
		if (
			this.props.buttonKey.value === '/' ||
			this.props.buttonKey.value === '+' ||
			this.props.buttonKey.value === '-' ||
			this.props.buttonKey.value === 'x'
		) {
			return 'four';
		} else if (
			this.props.buttonKey.value === '8' ||
			this.props.buttonKey.value === '5' ||
			this.props.buttonKey.value === '2' ||
			this.props.buttonKey.value === '.'
		) {
			return 'six';
		} else {
			return 'five';
		}
	};

	render() {
		return (
			<button
				id={this.props.buttonKey.id}
				className={`${this.specifyButtonWidth()} wide column`}
				key={this.props.buttonKey.id}
				onClick={this.handleClick}
			>
				{this.props.buttonKey.value}
			</button>
		);
	}
}

export default connect(null, { addInput, selectInput, clearInput })(Key);
