import React from 'react';
import Key from './Key';
import { connect } from 'react-redux';
import { evalInput } from '../actions';

class Keypad extends React.Component {
	handleEqualClick = () => {
		this.props.evalInput(this.props.addInput);
	};

	renderFuncKeys() {
		return this.props.funcKeys.map(funcKey => {
			return <Key key={funcKey} buttonKey={funcKey} />;
		});
	}

	renderKeys() {
		return this.props.keys.map(key => {
			return <Key key={key.id} buttonKey={key} />;
		});
	}

	render() {
		return (
			<div id='keypad' className='ui grid segment'>
				{this.renderFuncKeys()}
				<div className='twelve wide column'>
					<div className='ui grid'>{this.renderKeys()}</div>
				</div>
				<button
					id='equals'
					className='four wide column'
					onClick={this.handleEqualClick}
				>
					=
				</button>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		keys: state.keys,
		funcKeys: state.funcKeys,
		addInput: state.addInput,
	};
};

export default connect(mapStateToProps, { evalInput })(Keypad);
