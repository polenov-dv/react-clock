import React from 'react';
import styles from './ClockNumber.module.scss'

const ClockNumber = ({ timeNumber, timeRotation }) => {
	return (
		<div className={styles.clock_number}
			style={{ transform: `rotate(${timeRotation}deg)` }}>
			<div style={{ transform: `rotate(-${timeRotation}deg)` }}>
				{timeNumber}
			</div>
		</div>
	);
}

export default ClockNumber;