import React from 'react'
import s from './RoundThree.module.css'
import './../../../css/all.min.css'
import $ from 'jquery'

const RoundThree = (props) => {

	let maxPointOnTask = 5;
	let allCountRound = props.musicWord.length;
	let nowCountRound = props.roundNum;
	let massCountData = nowCountRound - 1;

	let assembledBlock =
		 <div className={s.containerWordBlock}>
			 {
				 !props.visionWordOne
					  ? <div className={s.blockWord} onClick={() => {props.visionWordOneAC(true)}}>???</div>
					  : <div className={s.blockWord}>{props.musicWord[massCountData].word[0]}</div>
			 }
			 {
				 !props.visionWordTwo
					  ? <div className={s.blockWord} onClick={() => {props.visionWordTwoAC(true)}}>???</div>
					  : <div className={s.blockWord}>{props.musicWord[massCountData].word[1]}</div>
			 }
			 {
				 !props.visionWordThree
					  ? <div className={s.blockWord} onClick={() => {props.visionWordThreeAC(true)}}>???</div>
					  : <div className={s.blockWord}>{props.musicWord[massCountData].word[2]}</div>
			 }
			 {
				 !props.visionWordFour
					  ? <div className={s.blockWord} onClick={() => {props.visionWordFourAC(true)}}>???</div>
					  : <div className={s.blockWord}>{props.musicWord[massCountData].word[3]}</div>
			 }
			 {
				 !props.visionWordFive
					  ? <div className={s.blockWord} onClick={() => {props.visionWordFiveAC(true)}}>???</div>
					  : <div className={s.blockWord}>{props.musicWord[massCountData].word[4]}</div>
			 }
		 </div>;

	let numberRound = () => {
		for(let i = 0; i <= allCountRound; i++){
			switch (nowCountRound) {
				case i: {
					return assembledBlock
				}
			}
		}
	};

	let count = 0;

	let startTimer = (timeSet = 30) => {
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

	$(document).ready(function(){
		if(nowCountRound % 2 == 0){
			$('#styleBackground').css('background', '#ff544d');
			$('#prevBtn').css('background', '#ff544d')
			$('#nextBtn').css('background', '#ff544d')
		}else{
			$('#styleBackground').css('background', '#6869ff');
			$('#prevBtn').css('background', '#6869ff')
			$('#nextBtn').css('background', '#6869ff')
		}
		let countOpenAnswer = 0;
		if(props.visionWordOne){
			countOpenAnswer += 1;
		}
		if(props.visionWordTwo){
			countOpenAnswer += 1;
		}
		if(props.visionWordThree){
			countOpenAnswer += 1;
		}
		if(props.visionWordFour){
			countOpenAnswer += 1;
		}
		if(props.visionWordFive){
			countOpenAnswer += 1;
		}
	/*	if(countOpenAnswer === 4){
			startTimer()
		}*/
	});






	return(
		 <div className={s.round3} id='styleBackground'>

			 <div className={s.messBtn}>
				 <button onClick={() => {
					 if(props.visionWordOne){
						 maxPointOnTask -= 1;
					 }
					 if(props.visionWordTwo){
						 maxPointOnTask -= 1;
					 }
					 if(props.visionWordThree){
						 maxPointOnTask -= 1;
					 }
					 if(props.visionWordFour){
						 maxPointOnTask -= 1;
					 }
					 if(props.visionWordFive){
						 maxPointOnTask -= 1;
					 }
					 if(maxPointOnTask < 0){
						 maxPointOnTask = 0
					 }
					 if(props.isActiveBtnCountPoints){
						 if(props.showPrompt){
							 if(nowCountRound % 2 == 0){
								 props.addPointRed(maxPointOnTask-1);
							 } else {
								 props.addPointBlue(maxPointOnTask-1);
							 }
							 props.activeBtnCountPoints(false);
						 }else {
							 if (nowCountRound % 2 == 0) {
								 props.addPointRed(maxPointOnTask);
							 } else {
								 props.addPointBlue(maxPointOnTask);
							 }
							 props.activeBtnCountPoints(false);
						 }
					 }
				 }}>Посчитать балы</button>
				 <button onClick={() => {
					 if(!props.musicWord[massCountData].prompt){
						 props.showPromptAC(false)
					 }else{
						 props.showPromptAC(true)
					 }

				 }}>Вывести подсказку</button>
				 <button onClick={() => {
					 props.showNameAC(true);
					 props.visionWordOneAC(true);
					 props.visionWordTwoAC(true);
					 props.visionWordThreeAC(true);
					 props.visionWordFourAC(true);
					 props.visionWordFiveAC(true);
					 props.showPromptAC(true)
				 }}>Ответ</button>
			 </div>

			 <div className={s.answer}>
				 {props.showName ? props.musicWord[massCountData].name : null}
			 </div>

			 <div className={s.mus}>
				 {props.showName ?  <audio autoplay='true' src={props.musicWord[massCountData].mus}/> : null}
				 {props.showName ?  <img src={props.musicWord[massCountData].img}/> : null}
			 </div>

			 <div className={s.prompt}>
				 {props.showPrompt ? props.musicWord[massCountData].prompt : null }
			 </div>

			 <div className={s.prev} id='prevBtn'>
				 <button onClick={() => {
					 if(nowCountRound > 1){
						 props.prevRound()
					 }
					 props.visionWordOneAC(false);
					 props.visionWordTwoAC(false);
					 props.visionWordThreeAC(false);
					 props.visionWordFourAC(false);
					 props.visionWordFiveAC(false);
					 props.activeBtnCountPoints(true);
					 props.showNameAC(false);
					 props.showPromptAC(false);
				 }}>
					 <i className="fas fa-chevron-circle-left"></i>
				 </button>
			 </div>

			 <div className={s.next} id='nextBtn'>
				 <button onClick={() => {
					 if(nowCountRound < allCountRound){
						 props.nextRound()
					 }
					 props.visionWordOneAC(false);
					 props.visionWordTwoAC(false);
					 props.visionWordThreeAC(false);
					 props.visionWordFourAC(false);
					 props.visionWordFiveAC(false);
					 props.activeBtnCountPoints(true);
					 props.showNameAC(false);
					 props.showPromptAC(false);
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

			 <div className={s.words}>
				 {numberRound()}
			 </div>

			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>

		 </div>

	);
};

export default RoundThree;