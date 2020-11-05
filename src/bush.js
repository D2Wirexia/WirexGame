import React from "react";

var timeToThink = 1;
let updateTimer = (timeLeft) => {
	return timeToThink = timeLeft
};

let count = 0;
let startTimer = (timeSet) => {
	let timer = setInterval(() => {
		count++;
		let timeLeft = timeSet - count;
		updateTimer(timeLeft);
		if(timeToThink === 0){
			clearInterval(timer);
		}
	}, 1000);
};

const Test = () => {
	return(
		 <>
			 <button onClick={()=>startTimer(3)}>Запустить таймер</button>
			 {timeToThink > 0 ? timeToThink : null}
		 </>
	)
};

export default Test;