import React from 'react'
import s from './RoundThree.module.css'
import './../../../css/all.min.css'
import $ from 'jquery'
import promptImg from './../../../library/backgroundText.png'

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
			props.timeToThinkRoundThreeAC(timeLeft);
			if(timeLeft === 0){
				clearInterval(timer);
			}
		}, 1000);
		props.timerSet(timer);
	};

	$(document).ready(function(){
		if(nowCountRound % 2 === 0){
			props.roundTeamSet('Red');
		}else{
			props.roundTeamSet('Blue');
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
		if(countOpenAnswer === 3){
			startTimer(30)
		}
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
						 clearInterval(props.timer);
						 props.timeToThinkRoundThreeAC(30);
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
				 {
				 	props.showPrompt
						 ? <div className={s.promptBlock}>
							 	<img src={promptImg}/>
							 	<div className={s.shadowImg}><img src={promptImg}/></div>
							 	<span className={s.wrwqrw}>{props.musicWord[massCountData].prompt}</span>
				 			</div>
						 : null
				 }
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
					 clearInterval(props.timer);
					 props.timeToThinkRoundThreeAC(30);
					 $('#time').css('color', '#fff')

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
					 clearInterval(props.timer);
					 props.timeToThinkRoundThreeAC(30);
					 $('#time').css('color', '#fff')
				 }}>
					 <i className="fas fa-chevron-circle-right"></i>
				 </button>
			 </div>


			 <div className={s.timerBlock}>
				 <div className={s.blockTime}>
					 <div/>
					 <div/>
				 </div>
				 <div id="time">
					 {
						 props.timeLeftRoundThree > 0
							  ? props.timeLeftRoundThree < 10 ? '0' + props.timeLeftRoundThree : props.timeLeftRoundThree
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