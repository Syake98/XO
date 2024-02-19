import styles from './Field.module.css';
import PropTypes from 'prop-types'

export const FieldLayout = ({field, onClick}) => {
	return (
		<div className={styles.fieldButtons}>
			{field.map((el, index) => (
				<button
					key={index}
					className={styles.fieldButton}
					onClick={onClick}
					data-id={index}
				>
					{el}
				</button>
			))}
		</div>
	);
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	onClick: PropTypes.func,
};
