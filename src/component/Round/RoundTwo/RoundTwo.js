import React from "react";
import s from './RoundTwo.module.css'
import './../../../css/all.min.css'
import bit from './../../../library/musGif.gif'
import bitLoad from './../../../library/imgMus.png'
import $ from 'jquery'

const RoundTwo = (props) => {

	let nowCountRound = props.roundNum;
	let messCountRound = nowCountRound - 1;
	let allCountRound = props.guessMusic.length;

	let whatMusic =
		 <div className={s.opacityPlayMus} >
			 <div onClick={() => {
				  props.playWhatMusic(true);
				  $('#playMusic').css('display', 'none');
				 startTimer(props.timeSet)
			 }} id={'playMusic'}/>
		 <audio controls src={props.guessMusic[messCountRound].musicSRC}/>;
		 </div>

	$(document).ready(function(){
		if(nowCountRound % 2 == 0){
			$('#styleBackground').css('background', '#6869ff');
			$('#prevBtn').css('background', '#6869ff')
			$('#nextBtn').css('background', '#6869ff')
		}else{
			$('#styleBackground').css('background', '#ff544d');
			$('#prevBtn').css('background', '#ff544d')
			$('#nextBtn').css('background', '#ff544d')
		}
	});

	let count = 0;
	let startTimer = (timeSet) => {
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
	};
	return(
		 <div className={s.round2}>

			 <div className={s.messBtn}>
				 <button onClick={() => {
				 	if(nowCountRound % 2 == 0){
						props.addPointBlue(1);
					}else{
						props.addPointRed(1);
					}
				 }}>Верно!</button>

				 <button onClick={() => {
					 if(nowCountRound % 2 == 0){
						 props.addPointBlue(-1);
					 }else{
						 props.addPointRed(-1);
					 }
				 }}>Не верно!</button>

				 <button onClick={() => {
						props.showAnswerWhatMusic(true);
				 }}>Ответ</button>
			 </div>

			 <div className={s.prev} id='prevBtn'>
				 <button onClick={() => {
					 if(nowCountRound > 1){
						 props.prevRound()
					 }
					 props.showAnswerWhatMusic(false);
					 $('#playMusic').css('display', 'block');
					 props.playWhatMusic(false);
				 }}>
					 <i className="fas fa-chevron-circle-left"></i>
				 </button>
			 </div>

			 <div className={s.next} id='nextBtn'>
				 <button onClick={() => {
					 if(nowCountRound < allCountRound){
						 props.nextRound()
					 }
					 props.showAnswerWhatMusic(false);
					 $('#playMusic').css('display', 'block');
					 props.playWhatMusic(false);
				 }}>
					 <i className="fas fa-chevron-circle-right"></i>
				 </button>
			 </div>

			 <div className={s.timerBlock}>
				 <div id="time">
					 {
						 props.timeToThink > 0
							  ? props.timeToThink < 10 ? '0' + props.timeToThink : props.timeToThink
							  : '00'
					 }
				 </div>
			 </div>

			 <div id='styleBackground' className={s.styleBackground}>
				 {
					 nowCountRound % 2 == 0
					  ? props.nameTeamBlue
						  : props.nameTeamRed
				 }
			 </div>


			 <div className={s.name}>
			 {
				 props.isShowAnswerWhatMusic
					  ? props.guessMusic[messCountRound].name
					  : null
			 }

			 </div>

			 {whatMusic}



				 {
				 	props.isPlayWhatMusic
					  ? <div className={s.bitImg}>
							 <img src={bit}/>
						 </div>
						 : <div className={s.bitImg}>
							 <img src={bitLoad}/>
						 </div>
				 }




			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>
		 </div>
	)
};
export default RoundTwo;