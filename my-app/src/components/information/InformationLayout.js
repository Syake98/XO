import styles from './Information.module.css'

export const InformationLayout = ({winnerSign}) => {
	return (
		<div className={styles.informationLayout}>{winnerSign}</div>
	)
}

