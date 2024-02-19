import styles from './Information.module.css'

export const InformationLayout = ({currentMessage}) => {
	return (
		<div className={styles.informationLayout}>{currentMessage}</div>
	)
}

