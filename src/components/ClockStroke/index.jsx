import React from 'react';
import styles from './ClockStroke.module.scss'

const ClockStroke = ({ angleRotate }) => {
	return (
		<>
			<span
				className={styles.clock_stroke}
				style={{ transform: `rotate(${angleRotate}deg)` }}>
			</span>
		</>
	);
}

export default ClockStroke;