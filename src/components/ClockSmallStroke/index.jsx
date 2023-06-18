import React from 'react';
import styles from './ClockSmallStroke.module.scss'

const ClockSmallStroke = ({ angleRotate }) => {
	return (
		<>
			<span
				className={styles.clock_stroke + ' ' + styles.clock_stroke_small}
				style={{ transform: `rotate(${angleRotate}deg)` }}>
			</span>
		</>
	);
}
export default ClockSmallStroke;