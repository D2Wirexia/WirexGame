import React from "react";
import s from './MainMenu.module.css'
import autograph from './../../library/autograph.png'
import {changeUpdateTimer} from "../../Task/Score";

const MainMenu = (props) => {

	const changeNameRed = React.createRef();
	const changeNameBlue = React.createRef();
	const countTime = React.createRef();

	let onCountPointsRed = () => {
		let text = changeNameRed.current.value;
		if(text.length <= 15){
			props.updateTeamNameRedAC(text)
		}
	};
	let onCountPointsBlue = () => {
		let text = changeNameBlue.current.value;
		if(text.length <= 15) {
			props.updateTeamNameBlueAC(text)
		}
	};
	let onCountTime= () => {
		let text = countTime.current.value;
		props.updateTimer(text)
	};

	return(
		 <div className={s.mainMenu}>

			 <div className={s.teams}>
					<textarea placeholder={'Изменить название красной команды'}
								 ref={changeNameRed}
								 onChange={onCountPointsRed}
								 value={props.updateTeamNameRed}/>

				 <textarea placeholder={'Изменить название синей команды'}
							  ref={changeNameBlue}
							  onChange={onCountPointsBlue}
							  value={props.updateTeamNameBlue}/>
				 <input type={'number'}
						  ref={countTime}
						  placeholder={'Время на размышления'}
						  onChange={onCountTime}
						  value={props.updateTimeToThink}/>
				 <button onClick={() => {
					 props.changeTeamNameRed(props.updateTeamNameRed);
					 props.changeTeamNameBlue(props.updateTeamNameBlue);
					 props.changeUpdateTimer(Number(props.updateTimeToThink));
				 }}>Изменить</button>
			 </div>

			 <div className={s.autograph}><img src={autograph}/></div>
		 </div>
	)
};

export default MainMenu;