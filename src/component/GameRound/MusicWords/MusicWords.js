import React, {useEffect, useState} from 'react'
import s from './MusicWords.module.css'
import './../../../css/all.min.css'
import promptImg from './../../../library/backgroundText.png'
import note from './../../../library/note.png'
import Timer from "../../Timer/Timer";

const MusicWords = (props) => {
	const timeLeftRoundThree = 30;
	let [nowCountRound, setNowCountRound] = useState(props.roundNum);
	useEffect(() => {
		setNowCountRound(props.roundNum)
	}, [props.roundNum]);
	let [positionNoteImg, setPositionNoteImg] = useState(true);
	useEffect(() => {
		setPositionNoteImg(true)
	}, [nowCountRound]);
	let [removeTimer, setRemoveTimer] = useState(false);
	useEffect(() => {
		setRemoveTimer(false)
	}, [nowCountRound]);

	let maxPointOnTask = 5;
	let allCountRound = props.musicWord.length;
	let massCountData = nowCountRound - 1;

	if (nowCountRound % 2 === 0){
		props.roundTeamSet('Red');
	} else {
		props.roundTeamSet('Blue');
	}
	let assembledBlock =
		 <div className={s.containerWordBlock}>
			 {
				 !props.visionWordOne
					  ? <div className={s.blockWord} onClick={() => {
						  props.visionWordOneAC(true)
					  }}><span>???</span></div>
					  : <div className={s.blockWord}><span>{props.musicWord[massCountData].word[0]}</span></div>
			 }
			 {
				 !props.visionWordTwo
					  ? <div className={s.blockWord} onClick={() => {
						  props.visionWordTwoAC(true)
					  }}><span>???</span></div>
					  : <div className={s.blockWord}><span>{props.musicWord[massCountData].word[1]}</span></div>
			 }
			 {
				 !props.visionWordThree
					  ? <div className={s.blockWord} onClick={() => {
						  props.visionWordThreeAC(true)
					  }}>???</div>
					  : <div className={s.blockWord}><span>{props.musicWord[massCountData].word[2]}</span></div>
			 }
			 {
				 !props.visionWordFour
					  ? <div className={s.blockWord} onClick={() => {
						  props.visionWordFourAC(true)
					  }}>???</div>
					  : <div className={s.blockWord}><span>{props.musicWord[massCountData].word[3]}</span></div>
			 }
			 {
				 !props.visionWordFive
					  ? <div className={s.blockWord} onClick={() => {
						  props.visionWordFiveAC(true)
					  }}>???</div>
					  : <div className={s.blockWord}><span>{props.musicWord[massCountData].word[4]}</span></div>
			 }
		 </div>;
	let countOpenAnswer = 0;
	if (props.visionWordOne) {
		countOpenAnswer += 1;
	}
	if (props.visionWordTwo) {
		countOpenAnswer += 1;
	}
	if (props.visionWordThree) {
		countOpenAnswer += 1;
	}
	if (props.visionWordFour) {
		countOpenAnswer += 1;
	}
	if (props.visionWordFive) {
		countOpenAnswer += 1;
	}
	if (countOpenAnswer === 3) {
		props.showPromptAC(true);
	}
	return (
		 <div className={s.round3} id="styleBackground">
			 <div className={s.prev}>
				 <button onClick={() => {
					 if (nowCountRound > 1) {
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
					 setRemoveTimer(true);
					 setPositionNoteImg(false);
					 if (nowCountRound === props.roundNum) {
						 setPositionNoteImg(true);
					 }
				 }}>
					 <i className="fas fa-chevron-circle-left"/>
				 </button>
			 </div>
			 <div className={s.next}>
				 <button onClick={() => {
					 if (nowCountRound < allCountRound) {
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
					 setRemoveTimer(true);
					 setPositionNoteImg(false);
					 if (nowCountRound === props.roundNum) {
						 setPositionNoteImg(true);
					 }
				 }}>
					 <i className="fas fa-chevron-circle-right"/>
				 </button>
			 </div>
			 <div className={s.messBtn}>
				 <button onClick={() => {
					 if (props.visionWordOne) {
						 maxPointOnTask -= 1;
					 }
					 if (props.visionWordTwo) {
						 maxPointOnTask -= 1;
					 }
					 if (props.visionWordThree) {
						 maxPointOnTask -= 1;
					 }
					 if (props.visionWordFour) {
						 maxPointOnTask -= 1;
					 }
					 if (props.visionWordFive) {
						 maxPointOnTask -= 1;
					 }
					 if (maxPointOnTask < 0) {
						 maxPointOnTask = 0
					 }
					 if (props.isActiveBtnCountPoints) {
						 if (nowCountRound % 2 === 0) {
							 props.addPointRed(maxPointOnTask);
						 } else {
							 props.addPointBlue(maxPointOnTask);
						 }
						 props.activeBtnCountPoints(false);
					 }
					 props.showNameAC(true);
					 props.visionWordOneAC(true);
					 props.visionWordTwoAC(true);
					 props.visionWordThreeAC(true);
					 props.visionWordFourAC(true);
					 props.visionWordFiveAC(true);
					 props.showPromptAC(false);
					 setRemoveTimer(true);
					 setPositionNoteImg(false);
				 }}>Посчитать балы
				 </button>
				 <button onClick={() => {
					 props.showNameAC(true);
					 props.visionWordOneAC(true);
					 props.visionWordTwoAC(true);
					 props.visionWordThreeAC(true);
					 props.visionWordFourAC(true);
					 props.visionWordFiveAC(true);
					 props.showPromptAC(false);
					 setRemoveTimer(true);
					 setPositionNoteImg(false);

				 }}>Ответ
				 </button>
			 </div>
			 <div className={s.answer}>
				 {props.showName ? props.musicWord[massCountData].name : null}
			 </div>
			 <div className={s.mus}>
				 {props.showName ?
					  <audio autoPlay={true} src={props.musicWord[massCountData].mus}/> : null}
				 {props.showName ? <img src={props.musicWord[massCountData].img} alt="img"/> : null}
			 </div>
			 <div className={s.prompt}>
				 {
					 props.showPrompt
						  ? <div className={s.promptBlock}>
							  	<img src={promptImg} alt="promptFrontPicture"/>
							  	<div className={s.shadowImg}><img src={promptImg} alt="promptBackPicture"/></div>
							  	<span className={s.wrwqrw}>{props.musicWord[massCountData].prompt}</span>
						  </div>
						  : null
				 }
			 </div>

			 <div className={positionNoteImg ? s.noteImg : s.noteImgShadow}>
				 <img src={note} alt="imgNote"/>
			 </div>
			 <div className={s.timerBlock}>
				 <Timer time={timeLeftRoundThree} conditionTimer={countOpenAnswer}
						  removeTimer={removeTimer}/>
			 </div>
			 <div className={s.words}>
				 {assembledBlock}
			 </div>
			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>
		 </div>
	);
};
export default MusicWords;