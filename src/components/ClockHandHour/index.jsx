import React from 'react';
import styles from './ClockHandHour.module.scss';

const ClockHandHour = ({ timeHours }) => {
	return (
		<>
			<span className={styles.clock_hand + ' ' + styles.clock_hand_hour}
				style={{ transform: `translate(-50%) rotate(${timeHours * 360}deg)` }}>
			</span>
		</>
	);
}

export default ClockHandHour;