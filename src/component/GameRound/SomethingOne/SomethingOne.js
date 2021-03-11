import React, {useEffect, useState} from "react";
import s from './SomethingOne.module.css'
import './../../../css/all.min.css'
import $ from 'jquery'
import promptImg from "../../../library/backgroundText.png";
import Timer from "../../Timer/Timer";

const SomethingOne = (props) => {

	let [nowCountRound, setNowCountRound] = useState(props.roundNum);
	useEffect(() => {
		setNowCountRound(props.roundNum)
	}, [props.roundNum]);
	let [removeTimer, setRemoveTimer] = useState(false);
	useEffect(() => {setRemoveTimer(false)}, [nowCountRound]);
	let [isFetch, setIsFetch] = useState(false);
	let messCountRound = nowCountRound - 1;
	let allCountRound = props.oneOfTheThree.length;


	let imgMess =
		 <div className={s.imgBlockMess}>
			 <img src={props.oneOfTheThree[messCountRound].img[0]} alt="picture1" id="one" onClick={() => {
				 $('#one').css('border', '6px solid yellow');
				 $('#two').css('border', 'none');
				 $('#three').css('border', 'none');
				 props.varOneAC(true);
				 props.varTwoAC(false);
				 props.varThreeAC(false);

			 }}/>
			 <img src={props.oneOfTheThree[messCountRound].img[1]} alt="picture2" id="two" onClick={() => {
				 $('#one').css('border', 'none');
				 $('#two').css('border', '6px solid yellow');
				 $('#three').css('border', 'none');
				 props.varOneAC(false);
				 props.varTwoAC(true);
				 props.varThreeAC(false);
			 }}/>
			 <img src={props.oneOfTheThree[messCountRound].img[2]} alt="picture3" id="three" onClick={() => {
				 $('#one').css('border', 'none');
				 $('#two').css('border', 'none');
				 $('#three').css('border', '6px solid yellow');
				 props.varOneAC(false);
				 props.varTwoAC(false);
				 props.varThreeAC(true);
			 }}/>
			 </div>;


	$(document).ready(function(){
		if(nowCountRound % 2 === 0){
			props.roundTeamSet('Blue');
		}else{
			props.roundTeamSet('Red');
		}
		$('#one').hover(() => {
			$('#one').css('transform', 'scale(1.05)');
			$('#two').css('transform', 'scale(.95)');
			$('#three').css('transform', 'scale(.95)');
		}, () => {
			$('#one').css('transform', 'scale(1)');
			$('#two').css('transform', 'scale(1)');
			$('#three').css('transform', 'scale(1)');
		});

		$('#two').hover(() => {
			$('#one').css('transform', 'scale(.95)');
			$('#two').css('transform', 'scale(1.05)');
			$('#three').css('transform', 'scale(.95)');

		}, () => {
			$('#one').css('transform', 'scale(1)');
			$('#two').css('transform', 'scale(1)');
			$('#three').css('transform', 'scale(1)');
		});

		$('#three').hover(() => {
			$('#three').css('transform', 'scale(1.05)');
			$('#two').css('transform', 'scale(.95)');
			$('#one').css('transform', 'scale(.95)');

		}, () => {
			$('#one').css('transform', 'scale(1)');
			$('#two').css('transform', 'scale(1)');
			$('#three').css('transform', 'scale(1)');
		});
	});


	return(
		 <div className={s.round2}>
			 <div className={s.messBtn}>
				  <button onClick={() => {
				  	if(props.varOne || props.varTwo || props.varThree) {
						if (props.oneOfTheThree[messCountRound].answer === 1) {
							$('#one').css('border', '6px solid green');
							$('#two').css('transform', 'scale(0.9)');
							$('#three').css('transform', 'scale(0.9)');
						}
						if (props.oneOfTheThree[messCountRound].answer === 2) {
							$('#one').css('transform', 'scale(0.9)');
							$('#two').css('border', '6px solid green');
							$('#three').css('transform', 'scale(0.9)');
						}
						if (props.oneOfTheThree[messCountRound].answer === 3) {
							$('#one').css('transform', 'scale(0.9)');
							$('#two').css('transform', 'scale(0.9)');
							$('#three').css('border', '6px solid green');
						}
						if (props.varOne && props.oneOfTheThree[messCountRound].answer !== 1) {
							$('#one').css('border', '6px solid #FF2D25');
							if (nowCountRound % 2 === 0) {
								props.addPointBlue(-1);
							} else {
								props.addPointRed(-1);
							}
						}
						if (props.varTwo && props.oneOfTheThree[messCountRound].answer !== 2) {
							$('#two').css('border', '6px solid #FF2D25');
							if (nowCountRound % 2 === 0) {
								props.addPointBlue(-1);
							} else {
								props.addPointRed(-1);
							}
						}
						if (props.varThree && props.oneOfTheThree[messCountRound].answer !== 3) {
							$('#three').css('border', '6px solid #FF2D25');
							if (nowCountRound % 2 === 0) {
								props.addPointBlue(-1);
							} else {
								props.addPointRed(-1);
							}
						}
						if (props.varOne && props.oneOfTheThree[messCountRound].answer === 1) {
							if (nowCountRound % 2 === 0) {
								props.addPointBlue(1);
							} else {
								props.addPointRed(1);
							}
						}
						if (props.varTwo && props.oneOfTheThree[messCountRound].answer === 2) {
							if (nowCountRound % 2 === 0) {
								props.addPointBlue(1);
							} else {
								props.addPointRed(1);
							}
						}
						if (props.varThree && props.oneOfTheThree[messCountRound].answer === 3) {
							if (nowCountRound % 2 === 0) {
								props.addPointBlue(1);
							} else {
								props.addPointRed(1);
							}
						}
						setRemoveTimer(true);
					}else{
				  		alert("Выберите один из вариантов ответа");
					}

				 }}>Ответ</button>
			 </div>

			 <div className={s.prev} id='prevBtn'>
				 <button onClick={() => {
					 if(nowCountRound > 1){
						 props.prevRound()
					 }
					 $('#one').css('border', 'none');
					 $('#two').css('border', 'none');
					 $('#three').css('border', 'none');
					 $('#one').css('transform', 'scale(1)');
					 $('#two').css('transform', 'scale(1)');
					 $('#three').css('transform', 'scale(1)');
					 clearInterval(props.timer);
					 props.timeToThinkAC(props.timeSet);
					 $('#time').css('color', '#fff');
					 props.varOneAC(false);
					 props.varTwoAC(false);
					 props.varThreeAC(false);
					 setRemoveTimer(true);
				 }}>
					 <i className="fas fa-chevron-circle-left"/>
				 </button>
			 </div>

			 <div className={s.next} id='nextBtn'>
				 <button onClick={() => {
					 if(nowCountRound < allCountRound){
						 props.nextRound()
					 }
					 $('#one').css('border', 'none');
					 $('#two').css('border', 'none');
					 $('#three').css('border', 'none');
					 $('#one').css('transform', 'scale(1)');
					 $('#two').css('transform', 'scale(1)');
					 $('#three').css('transform', 'scale(1)');
					 clearInterval(props.timer);
					 props.timeToThinkAC(props.timeSet);
					 $('#time').css('color', '#fff');
					 props.varOneAC(false);
					 props.varTwoAC(false);
					 props.varThreeAC(false);
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

			 <div className={s.prompt}>
				 <div className={s.promptBlock}>
							  <img src={promptImg} alt="promptImg"/>
							  <span className={s.wrwqrw}>{props.oneOfTheThree[messCountRound].question}</span>
						  </div>

			 </div>

			 {imgMess}


			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>
		 </div>
	)
};
export default SomethingOne;