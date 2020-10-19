import React from "react";
import { connect } from "react-redux";

class Input extends React.Component {
	render() {
		return <div>{this.props.selectInput}</div>;
	}
}

const mapStateToProps = state => {
	return { selectInput: state.selectInput };
};

export default connect(mapStateToProps)(Input);
