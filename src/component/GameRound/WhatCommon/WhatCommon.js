import React, {useEffect, useState} from "react";
import s from './WhatCommon.module.css'
import './../../../css/all.min.css'
import Timer from "../../Timer/Timer";

const WhatCommon = (props) => {
	let [nowCountRound, setNowCountRound] = useState(props.roundNum);
	useEffect(() => {
		setNowCountRound(props.roundNum)
	}, [props.roundNum]);
	let [removeTimer, setRemoveTimer] = useState(false);
	useEffect(() => {setRemoveTimer(false)}, [nowCountRound]);
	let [isFetch, setIsFetch] = useState(false);
	let messCountRound = nowCountRound - 1;
	let allCountRound = props.whatCommon.length;
	let whatComImg =
		 <div className={s.blockImg}>
			 <img src={props.whatCommon[messCountRound].img[0]} alt="figure1"/>
			 <img src={props.whatCommon[messCountRound].img[1]} alt="figure2"/>
			 <img src={props.whatCommon[messCountRound].img[2]} alt="figure3"/>
		 </div>;
	nowCountRound % 2 === 0 ? props.roundTeamSet('Red') : props.roundTeamSet('Blue');
	return (
		 <div className={s.round1} id={'styleBackground'}>
			 <div className={s.messBtn}>
				 <button onClick={() => {
					 if (nowCountRound % 2 === 0) {
						 props.addPointRed(1);
					 } else {
						 props.addPointBlue(1);
					 }
				 }}>Верно!
				 </button>
				 <button onClick={() => {
					 if (nowCountRound % 2 === 0) {
						 props.addPointRed(-1);
					 } else {
						 props.addPointBlue(-1);
					 }
				 }}>Не верно!
				 </button>
				 <button onClick={() => {
					 props.showAnswerWhatCommon(true);
					 setRemoveTimer(true);
				 }}>Ответ
				 </button>
			 </div>
			 <div className={s.prev}>
				 <button onClick={() => {
					 if (nowCountRound > 1) {
						 props.prevRound()
					 }
					 props.showAnswerWhatCommon(false);
					 setRemoveTimer(true);
				 }}>
					 <i className="fas fa-chevron-circle-left"/>
				 </button>
			 </div>
			 <div className={s.next}>
				 <button onClick={() => {
					 if (nowCountRound < allCountRound) {
						 props.nextRound()
					 }
					 props.showAnswerWhatCommon(false);
					 setRemoveTimer(true);
				 }}>
					 <i className="fas fa-chevron-circle-right"/>
				 </button>
			 </div>
			 <div className={s.timerBlock}>
				 <div className={s.startTimer}>
					 <i className="far fa-play-circle" onClick={() =>{
					 	setIsFetch(res => !res);
					 }}/>
					 <Timer time={props.timeSet} isFetchButtonStartTimer={isFetch}
							  removeTimer={removeTimer}/>
				 </div>
			 </div>
			 {whatComImg}
			 <div className={s.name}>
				 {
					 props.isShowAnswerWhatCommon
						  ? props.whatCommon[messCountRound].answer
						  : '. . . . .'
				 }
			 </div>
			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>
		 </div>
	)
};
export default WhatCommon;