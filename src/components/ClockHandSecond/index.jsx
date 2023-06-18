import React from 'react';
import styles from './ClockHandSecond.module.scss';
import { keyframes } from "styled-components";

const ClockHandSecond = ({ timeSeconds }) => {

	return (
		<>
			<div className={styles.clock_hand + ' ' + styles.clock_hand_second}
				style={{ transform: `translate(-50%) rotate(${timeSeconds * 360}deg)` }}>
			</div>
		</>
	);
}

export default ClockHandSecond;