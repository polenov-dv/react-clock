import React from 'react';
import styles from './ClockHandMinute.module.scss';

const ClockHandMinute = ({ timeMinutes }) => {
	return (
		<>
			<span className={styles.clock_hand + ' ' + styles.clock_hand_minute}
				style={{ transform: `translate(-50%) rotate(${timeMinutes * 360}deg)` }}>
			</span>
		</>
	);
}

export default ClockHandMinute;