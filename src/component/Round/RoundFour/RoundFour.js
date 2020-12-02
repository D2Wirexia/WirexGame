import React from "react";
import s from './RoundFour.module.css'
import $ from 'jquery'
import './../../../css/all.min.css'


const RoundFour = (props) => {

	let nowCountRound = props.roundNum;
	let messCountRound = nowCountRound - 1;
	let allCountRound = props.putInPlaces.length;

	/*let cloneMessConcept = props.putInPlaces[messCountRound].concept.slice();
	let randomizeMess = cloneMessConcept.sort(() => Math.random() - 0.5);*/

	let randomizeMess = props.putInPlaces[messCountRound].conceptRand;
	let nowPoint = 0;



	let variants =
		 <div className={s.blockVariants}>
			 <div className={s.variant}>{randomizeMess[0]}</div>
			 <div className={s.variant}>{randomizeMess[1]}</div>
			 <div className={s.variant}>{randomizeMess[2]}</div>
			 <div className={s.variant}>{randomizeMess[3]}</div>
			 <div className={s.variant}>{randomizeMess[4]}</div>
			 <div className={s.variant}>{randomizeMess[5]}</div>
		 </div>


	let selectVariants1 =
		 <select id="select1">
			 <option selected disabled>Выберите вариант</option>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
		 </select>
	let selectVariants2 =
		 <select id="select2">
			 <option selected disabled>Выберите вариант</option>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
		 </select>
	let selectVariants3 =
		 <select id="select3">
			 <option selected disabled>Выберите вариант</option>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
		 </select>
	let selectVariants4 =
		 <select id="select4">
			 <option selected disabled>Выберите вариант</option>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
		 </select>
	let selectVariants5 =
		 <select id="select5">
			 <option selected disabled>Выберите вариант</option>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
		 </select>
	let selectVariants6 =
		 <select id="select6">
			 <option selected disabled>Выберите вариант</option>
			 <option value={randomizeMess[0]}>{randomizeMess[0]}</option>
			 <option value={randomizeMess[1]}>{randomizeMess[1]}</option>
			 <option value={randomizeMess[2]}>{randomizeMess[2]}</option>
			 <option value={randomizeMess[3]}>{randomizeMess[3]}</option>
			 <option value={randomizeMess[4]}>{randomizeMess[4]}</option>
			 <option value={randomizeMess[5]}>{randomizeMess[5]}</option>
		 </select>


	let imgVariants =
		 <div className={s.imgVariants}>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[0]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[0]} id={'selectVariants1'}/>
				 <div className={s.selectVar}>{selectVariants1}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[1]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[1]} id={'selectVariants2'}/>
				 <div className={s.selectVar}>{selectVariants2}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[2]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[2]} id={'selectVariants3'}/>
				 <div className={s.selectVar}>{selectVariants3}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[3]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[3]} id={'selectVariants4'}/>
				 <div className={s.selectVar}>{selectVariants4}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[4]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[4]} id={'selectVariants5'}/>
				 <div className={s.selectVar}>{selectVariants5}</div>
			 </div>
			 <div className={s.imgVar}>
				 <div className={s.answer}>
					 {
						 !props.isShowAnswerPutInPlace
							  ? null
							  :	<div className={s.answerBlock}>{props.putInPlaces[messCountRound].concept[5]}</div>
					 }
				 </div>
				 <img src={props.putInPlaces[messCountRound].img[5]} id={'selectVariants6'}/>
				 <div className={s.selectVar}>{selectVariants6}</div>
			 </div>
		 </div>


	let numberRound = () => {
		for(let i = 0; i <= allCountRound; i++){
			switch (nowCountRound) {
				case i: {
					return variants
				}
			}
		}
	};

	$(document).ready(function(){
		if(nowCountRound % 2 == 0){
			props.roundTeamSet('Blue');
		}else{
			props.roundTeamSet('Red');
		}
	});

	return (
		 <div id={'styleBackground'} className={s.round4}>

			 <div className={s.messBtn}>
				 <button onClick={() => {
					 if($('#select1 option:selected').html() === props.putInPlaces[messCountRound].concept[0]){
						 nowPoint += 1;
						 $('#selectVariants1').css('border', '5px solid green');
					 }else{
						 $('#selectVariants1').css('border', '5px solid red');
					 }
					 if($('#select2 option:selected').html() === props.putInPlaces[messCountRound].concept[1]){
						 nowPoint += 1;
						 $('#selectVariants2').css('border', '5px solid green');
					 }else{
						 $('#selectVariants2').css('border', '5px solid red');
					 }
					 if($('#select3 option:selected').html() === props.putInPlaces[messCountRound].concept[2]){
						 nowPoint += 1;
						 $('#selectVariants3').css('border', '5px solid green');
					 }else{
						 $('#selectVariants3').css('border', '5px solid red');
					 }
					 if($('#select4 option:selected').html() === props.putInPlaces[messCountRound].concept[3]){
						 nowPoint += 1;
						 $('#selectVariants4').css('border', '5px solid green');
					 }else{
						 $('#selectVariants4').css('border', '5px solid red');
					 }
					 if($('#select5 option:selected').html() === props.putInPlaces[messCountRound].concept[4]){
						 nowPoint += 1;
						 $('#selectVariants5').css('border', '5px solid green');
					 }else{
						 $('#selectVariants5').css('border', '5px solid red');
					 }
					 if($('#select6 option:selected').html() === props.putInPlaces[messCountRound].concept[5]){
						 nowPoint += 1;
						 $('#selectVariants6').css('border', '5px solid green');
					 }else{
						 $('#selectVariants6').css('border', '5px solid red');
					 }
					 if(props.isActiveBtnCountPoints){
						 if(nowCountRound % 2 == 0){
							 props.addPointBlue(nowPoint)
						 }else{
							 props.addPointRed(nowPoint)
						 }
					 	props.activeBtnCountPoints(false);
					 }
					 props.activeBtnCountPoints(false);
				 }}>Посчитать балы</button>

				 <button onClick={() => {
					 props.showAnswerPutInPlace(true)
				 }}>Ответ</button>
			 </div>


			 <div className={s.prev} id='prevBtn'>
				 <button onClick={() => {
					 if(nowCountRound > 1){
						 props.prevRound();
						 nowPoint = 0;
					 }
					 props.activeBtnCountPoints(true);
					 $('#select1').prop('selectedIndex', 0);
					 $('#select2').prop('selectedIndex', 0);
					 $('#select3').prop('selectedIndex', 0);
					 $('#select4').prop('selectedIndex', 0);
					 $('#select5').prop('selectedIndex', 0);
					 $('#select6').prop('selectedIndex', 0);
					 props.showAnswerPutInPlace(false);
					 $('#selectVariants1').css('border', 'none');
					 $('#selectVariants2').css('border', 'none');
					 $('#selectVariants3').css('border', 'none');
					 $('#selectVariants4').css('border', 'none');
					 $('#selectVariants5').css('border', 'none');
					 $('#selectVariants6').css('border', 'none');
				 }}>
					 <i className="fas fa-chevron-circle-left"></i>
				 </button>
			 </div>

			 <div className={s.next} id='nextBtn'>
				 <button onClick={() => {
					 if(nowCountRound < allCountRound){
						 props.nextRound();
						 nowPoint = 0;
					 }
					 props.activeBtnCountPoints(true);
					 $('#select1').prop('selectedIndex', 0);
					 $('#select2').prop('selectedIndex', 0);
					 $('#select3').prop('selectedIndex', 0);
					 $('#select4').prop('selectedIndex', 0);
					 $('#select5').prop('selectedIndex', 0);
					 $('#select6').prop('selectedIndex', 0);
					 props.showAnswerPutInPlace(false);
					 $('#selectVariants1').css('border', 'none');
					 $('#selectVariants2').css('border', 'none');
					 $('#selectVariants3').css('border', 'none');
					 $('#selectVariants4').css('border', 'none');
					 $('#selectVariants5').css('border', 'none');
					 $('#selectVariants6').css('border', 'none');
				 }}>
					 <i className="fas fa-chevron-circle-right"></i>
				 </button>
			 </div>

			 <div className={s.containerVariantsWord}>
				 {
					 !props.isShowAnswerPutInPlace
						  ? numberRound()
						  : null
				 }
			 </div>



			 <div className={s.containerPlace}>
				 {imgVariants}
			 </div>

			 <div className={s.infoCountRound}>{nowCountRound}/{allCountRound}</div>

		 </div>

	);
};

export default RoundFour;