import React from 'react';
import { connect } from 'react-redux';

class History extends React.Component {
	render() {
		return <div>{this.props.addInput}</div>;
	}
}

const mapStateToProps = state => {
	return { addInput: state.addInput };
};

export default connect(mapStateToProps)(History);
