import { InformationLayout } from '../../layouts/informationLayout/InformationLayout';
import { connect } from 'react-redux';
import { Component } from 'react';

class Information extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<InformationLayout
				isDraw={this.props.draw}
				isGameEnded={this.props.win}
				currentPlayer={this.props.currentPlayer}
			/>
		);
	}
}

const mapStateToProps = (state) => ({
	win: state.win,
	draw: state.draw,
	currentPlayer: state.currentPlayer,
});

export default connect(mapStateToProps)(Information);
