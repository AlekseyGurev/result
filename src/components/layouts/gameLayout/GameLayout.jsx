import { Field } from '../../blocks/field/Field';
import Information from '../../blocks/informaition/Information';
import { Button } from '../../ui/button/Button';
import { Title } from '../../ui/title/Title';
import { Component } from 'react';
import { connect } from 'react-redux';

class GameLayout extends Component {
	constructor(props) {
		super(props);
	}
	handleClickReset() {
		this.props.dispatch({ type: 'RESET_GAME' });
	}
	render() {
		return (
			<section className="game">
				<Title />
				<div className="container">
					<Information />
					<Field />
					{this.props.win || this.props.draw ? (
						<Button
							type={'submit'}
							handleClickReset={this.handleClickReset.bind(this)}
						>
							{'Новая игра'}
						</Button>
					) : null}
				</div>
			</section>
		);
	}
}

const mapStateToProps = (state) => ({
	win: state.win,
	draw: state.draw,
});

export default connect(mapStateToProps)(GameLayout);
