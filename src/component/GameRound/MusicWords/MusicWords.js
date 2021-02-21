import React, {useEffect, useState} from 'react'
import s from './MusicWords.module.css'
import './../../../css/all.min.css'
import $ from 'jquery'
import promptImg from './../../../library/backgroundText.png'
import note from './../../../library/note.png'
import Timer from "../../Timer/Timer";

const MusicWords = (props) => {

	const [nowCountRound, setNowCountRound] = useState(props.roundNum);
	useEffect(()=>{setNowCountRound(props.roundNum)}, [props.roundNum]);

	let maxPointOnTask = 5;
	let allCountRound = props.musicWord.length;
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
		//startTimer(timeLeft);
		props.showPromptAC(true);
	}


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
						 if (nowCountRound % 2 == 0) {
							 props.addPointRed(maxPointOnTask);
						 } else {
							 props.addPointBlue(maxPointOnTask);
						 }
						 props.activeBtnCountPoints(false);
					 }
					 clearInterval(props.timer);
					 props.timeToThinkRoundThreeAC(30);
				 }}>Посчитать балы</button>

				 <button onClick={() => {
					 props.showNameAC(true);
					 props.visionWordOneAC(true);
					 props.visionWordTwoAC(true);
					 props.visionWordThreeAC(true);
					 props.visionWordFourAC(true);
					 props.visionWordFiveAC(true);
					 props.showPromptAC(true);
					 clearInterval(props.timer);
					 $('#noteImg').css('display', 'none');
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
					 //clearInterval(props.timer);
					 props.timeToThinkRoundThreeAC(30);
					 $('#time').css('color', '#fff');
					 $('#noteImg').css('display', 'block');
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

					 //clearInterval(timeR);
					 props.timeToThinkRoundThreeAC(30);

					 $('#time').css('color', '#fff');
					 $('#noteImg').css('display', 'block');
				 }}>
					 <i className="fas fa-chevron-circle-right"></i>
				 </button>
			 </div>

			 <div className={s.noteImg} id="noteImg">
				 <img src={note}/>
			 </div>

			 <Timer time={30} conditionTimer={countOpenAnswer}/>


			 <div className={s.words}>
				 {assembledBlock}
			 </div>

			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>

		 </div>

	);
};

export default MusicWords;