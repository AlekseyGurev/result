import { Button } from '../../ui/button/Button';
import { getPath } from '../../../utils/utils';
import { connect } from 'react-redux';
import { Component } from 'react';
import { isDraw, isWin } from '../../../utils/utils';
class FieldLayout extends Component {
	constructor(props) {
		super(props);
	}

	handleClick(index) {
		if (this.props.field[index] || this.props.win || this.props.draw) return;
		const editField = this.props.field.map((cell, idx) =>
			idx === index ? this.props.currentPlayer : cell,
		);
		this.props.dispatch({ type: 'SET_FIELD', payload: editField });

		if (isWin(editField, this.props.currentPlayer)) {
			this.props.dispatch({ type: 'SET_WIN' });
			return;
		}
		if (isDraw(editField)) {
			this.props.dispatch({ type: 'SET_DRAW' });
			return;
		}
		this.props.dispatch({ type: 'CHANGE_PLAYER' });
	}

	render() {
		return (
			<div className="container-fields">
				{this.props.field.map((cell, index) => (
					<Button
						type={'game'}
						key={index}
						handleClick={() => {
							this.handleClick(index);
						}}
					>
						{cell && (
							<img draggable={false} src={getPath(cell)} alt="figure" />
						)}
					</Button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	win: state.win,
	draw: state.draw,
	currentPlayer: state.currentPlayer,
	field: state.field,
});

export default connect(mapStateToProps)(FieldLayout);
