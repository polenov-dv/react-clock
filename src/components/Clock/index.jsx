import React from 'react';
import styles from './Clock.module.scss';

import ClockSmallStroke from '../ClockSmallStroke';
import ClockStroke from '../ClockStroke';
import ClockHandHour from '../ClockHandHour';
import ClockHandSecond from '../ClockHandSecond';
import ClockHandMinute from '../ClockHandMinute';
import ClockNumber from '../ClockNumber';

const Clock = () => {
	const [constTime, setCountTime] = React.useState(new Date().toLocaleTimeString());
	const [timeHours, setTimeHours] = React.useState(0);
	const [timeMinutes, setTimeMinutes] = React.useState(0);
	const [timeSeconds, setTimeSeconds] = React.useState(0);

	const changeTime = () => {
		let date = new Date();
		let seconds = date.getSeconds() / 60;
		let minutes = (seconds + date.getMinutes()) / 60;
		let hours = (minutes + date.getHours()) / 12;

		setTimeHours(hours);
		setTimeMinutes(minutes);
		setTimeSeconds(seconds);
	}

	React.useEffect(() => {
		setInterval(() => {
			setCountTime(new Date().toLocaleTimeString());
			changeTime();
		}, 1000);
	});

	return (
		<div className={styles.content}>
			<span className={styles.clock_name}> React Time  </span>
			<span className={styles.clock_time}> {constTime} </span>
			<div className={styles.clock}>
				<div className={styles.point}></div>

				<ClockNumber timeNumber='12' timeRotation='0' />
				<ClockSmallStroke angleRotate='6' />
				<ClockSmallStroke angleRotate='12' />
				<ClockSmallStroke angleRotate='18' />
				<ClockSmallStroke angleRotate='24' />
				<ClockStroke angleRotate='30' />

				<ClockNumber timeNumber='1' timeRotation='30' />
				<ClockSmallStroke angleRotate='36' />
				<ClockSmallStroke angleRotate='42' />
				<ClockSmallStroke angleRotate='48' />
				<ClockSmallStroke angleRotate='54' />
				<ClockStroke angleRotate='60' />

				<ClockNumber timeNumber='2' timeRotation='60' />
				<ClockSmallStroke angleRotate='66' />
				<ClockSmallStroke angleRotate='72' />
				<ClockSmallStroke angleRotate='78' />
				<ClockSmallStroke angleRotate='84' />
				<ClockStroke angleRotate='90' />

				<ClockSmallStroke angleRotate='96' />
				<ClockSmallStroke angleRotate='102' />
				<ClockSmallStroke angleRotate='108' />
				<ClockSmallStroke angleRotate='114' />
				<ClockStroke angleRotate='120' />

				<ClockNumber timeNumber='3' timeRotation='90' />
				<ClockSmallStroke angleRotate='126' />
				<ClockSmallStroke angleRotate='132' />
				<ClockSmallStroke angleRotate='138' />
				<ClockSmallStroke angleRotate='144' />
				<ClockStroke angleRotate='150' />

				<ClockNumber timeNumber='4' timeRotation='120' />
				<ClockSmallStroke angleRotate='156' />
				<ClockSmallStroke angleRotate='162' />
				<ClockSmallStroke angleRotate='168' />
				<ClockSmallStroke angleRotate='174' />
				<ClockStroke angleRotate='180' />

				<ClockNumber timeNumber='5' timeRotation='150' />
				<ClockSmallStroke angleRotate='186' />
				<ClockSmallStroke angleRotate='192' />
				<ClockSmallStroke angleRotate='198' />
				<ClockSmallStroke angleRotate='204' />
				<ClockStroke angleRotate='210' />

				<ClockNumber timeNumber='6' timeRotation='180' />
				<ClockSmallStroke angleRotate='216' />
				<ClockSmallStroke angleRotate='222' />
				<ClockSmallStroke angleRotate='228' />
				<ClockSmallStroke angleRotate='234' />
				<ClockStroke angleRotate='240' />

				<ClockNumber timeNumber='7' timeRotation='210' />
				<ClockSmallStroke angleRotate='246' />
				<ClockSmallStroke angleRotate='252' />
				<ClockSmallStroke angleRotate='258' />
				<ClockSmallStroke angleRotate='264' />
				<ClockStroke angleRotate='270' />

				<ClockNumber timeNumber='8' timeRotation='240' />
				<ClockSmallStroke angleRotate='276' />
				<ClockSmallStroke angleRotate='282' />
				<ClockSmallStroke angleRotate='288' />
				<ClockSmallStroke angleRotate='294' />
				<ClockStroke angleRotate='300' />

				<ClockNumber timeNumber='9' timeRotation='270' />
				<ClockSmallStroke angleRotate='306' />
				<ClockSmallStroke angleRotate='312' />
				<ClockSmallStroke angleRotate='318' />
				<ClockSmallStroke angleRotate='324' />
				<ClockStroke angleRotate='330' />

				<ClockNumber timeNumber='10' timeRotation='300' />
				<ClockSmallStroke angleRotate='336' />
				<ClockSmallStroke angleRotate='342' />
				<ClockSmallStroke angleRotate='348' />
				<ClockSmallStroke angleRotate='354' />
				<ClockStroke angleRotate='360' />

				<ClockNumber timeNumber='11' timeRotation='330' />
				<ClockHandHour timeHours={timeHours} />
				<ClockHandMinute timeMinutes={timeMinutes} />
				<ClockHandSecond timeSeconds={timeSeconds} />
			</div>
		</div >
	);
}

export default Clock;