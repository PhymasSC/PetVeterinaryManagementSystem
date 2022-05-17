import React, { useState, useEffect } from "react";
import { Clock, Cursor } from "phosphor-react";
import ClockLabel from "./styles";
const DateTime = () => {
	const dateFormat = { month: "short", day: "2-digit", weekday: "long" };
	const timeFormat = { hour: "2-digit", hour12: true, minute: "2-digit" };
	let date = new Date().toLocaleString("en-my", dateFormat);
	const [time, setTime] = useState(
		new Date().toLocaleString("en-my", timeFormat)
	);

	useEffect(() => {
		setInterval(() => {
			setTime(new Date().toLocaleString("en-my", timeFormat));
		});
	});
	// let a = "Hello"
	// let b = "World"
	// output: Hello World

	// a + " " + b => Hello World
	// `{a} {b}` => Hello World
	return (
		<>
			<ClockLabel>
				<Clock size={24} color="#93b0c8" weight="duotone" />
				{time} {date}
			</ClockLabel>
		</>
	);
};

export default DateTime;
