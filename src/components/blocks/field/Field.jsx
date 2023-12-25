import { FieldLayout } from '../../layouts/fieldLayout/FieldLayout';
import PropTypes from 'prop-types';

export const Field = ({ field, handleClick }) => {
	return <FieldLayout field={field} handleClick={handleClick} />;
};

Field.propTypes = {
	handleClick: PropTypes.func,
	field: PropTypes.array,
};
