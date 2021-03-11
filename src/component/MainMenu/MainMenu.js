import React from "react";
import s from './MainMenu.module.css'
import autograph from './../../library/mainWirexia.png'
import './../../css/all.min.css'

const MainMenu = (props) => {

	const changeNameRed = React.createRef();
	const changeNameBlue = React.createRef();
	const countTime = React.createRef();

	let onCountPointsRed = () => {
		let text = changeNameRed.current.value;
		if(text.length <= 10){
			props.updateTeamNameRedAC(text)
		}
	};
	let onCountPointsBlue = () => {
		let text = changeNameBlue.current.value;
		if(text.length <= 10) {
			props.updateTeamNameBlueAC(text)
		}
	};
	let onCountTime= () => {
		let text = countTime.current.value;
		props.updateTimer(text);
		if(text >= 100){
			props.updateTimer(99)
		}
		if(text < 0){
			props.updateTimer(1)
		}
	};
	return(
		 <div className={s.mainMenu}>
			 <div className={s.backImg}/>
			 <div className={s.teams}>
				 <h2>W.GAME</h2>
				 <span><i className="fas fa-users"/>Изменить название красной команды</span>
				 <input type={'text'}
						  placeholder={'До 10 символов'}
						  ref={changeNameRed}
						  onChange={onCountPointsRed}
						  value={props.updateTeamNameRed}/>
				 <span><i className="fas fa-users"/>Изменить название синей команды</span>
				 <input  type={'text'}
							placeholder={'До 10 символов'}
							ref={changeNameBlue}
							onChange={onCountPointsBlue}
							value={props.updateTeamNameBlue}/>
				 <span><i className="fas fa-clock"/>Время на размышления в 1-вом раунде</span>
				 <input type={'number'}
						  ref={countTime}
						  placeholder={'макс. 99'}
						  onChange={onCountTime}
						  value={props.updateTimeToThink}/>
				 <button onClick={() => {
					 props.changeTeamNameRed(props.updateTeamNameRed);
					 props.changeTeamNameBlue(props.updateTeamNameBlue);
					 props.changeUpdateTimer(Number(props.updateTimeToThink));
				 }}>Изменить</button>
			 </div>

			 <div className={s.autograph}><img src={autograph} alt="autograph"/></div>
		 </div>
	)
};

export default MainMenu;