import React from "react";
import s from './RoundOne.module.css'
import './../../../css/all.min.css'
import {addPointRed, showAnswerWhatCommon} from "../../../Task/Score";
import $ from "jquery";

const RoundOne = (props) => {

	let nowCountRound = props.roundNum;
	let messCountRound = nowCountRound - 1;
	let allCountRound = props.whatCommon.length;

	let whatComImg =
		 <div className={s.blockImg}>
			 <img src={props.whatCommon[messCountRound].img[0]}/>
			 <img src={props.whatCommon[messCountRound].img[1]}/>
			 <img src={props.whatCommon[messCountRound].img[2]}/>
		 </div>


	$(document).ready(function(){
		if(nowCountRound % 2 == 0){
			props.roundTeamSet('Red');
		}else{
			props.roundTeamSet('Blue');
		}
	});


	let count = 0;
	let startTimer = (timeSet) => {
		clearInterval(props.timer);
		let timer = setInterval(() => {
			count++;
			let timeLeft = timeSet - count;
			if(timeLeft < 10){
				$('#time').css('color', 'red')
			}else{
				$('#time').css('color', '#fff')
			}
			props.timeToThinkAC(timeLeft);
			if(timeLeft === 0){
				clearInterval(timer);
			}
		}, 1000);
	props.timerSet(timer);
	};



	return(
		 <div className={s.round1} id={'styleBackground'}>

			 <div className={s.messBtn}>

				 <button onClick={() => {
					 if(nowCountRound % 2 == 0){
						 props.addPointRed(1);
					 }else{
						 props.addPointBlue(1);
					 }
				 }}>Верно!</button>

				 <button onClick={() => {
					 if(nowCountRound % 2 == 0){
						 props.addPointRed(-1);
					 }else{
						 props.addPointBlue(-1);
					 }
				 }}>Не верно!</button>

				 <button onClick={() => {
					 props.showAnswerWhatCommon(true);
				 }}>Ответ</button>

			 </div>

			 <div className={s.prev} id='prevBtn'>
				 <button onClick={() => {
					 if(nowCountRound > 1){
						 props.prevRound()
					 }
					 props.showAnswerWhatCommon(false);
					 clearInterval(props.timer);
					 props.timeToThinkAC(props.timeSet);
				 }}>
					 <i className="fas fa-chevron-circle-left"></i>
				 </button>
			 </div>



			 <div className={s.next} id='nextBtn'>
				 <button onClick={() => {
					 if(nowCountRound < allCountRound){
						 props.nextRound()
					 }
					 props.showAnswerWhatCommon(false);
					 clearInterval(props.timer);
					 props.timeToThinkAC(props.timeSet);
				 }}>
					 <i className="fas fa-chevron-circle-right"></i>
				 </button>
			 </div>

			 <div className={s.timerBlock}>
				 <div onClick={()=>startTimer(props.timeSet)} className={s.startTimer}>
					 <i className="far fa-play-circle"></i>
				 </div>
				 <div className={s.blockTime}>
					 <div/>
					 <div/>
				 </div>
				 <div id="time">
					 {
						 props.timeToThink > 0
							  ? props.timeToThink < 10 ? '0' + props.timeToThink : props.timeToThink
							  : '00'
					 }
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
export default RoundOne;