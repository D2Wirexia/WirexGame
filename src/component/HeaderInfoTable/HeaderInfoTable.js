import React from "react";
import s from './HeaderInfoTable.module.css'
import {NavLink} from 'react-router-dom'

function HeaderInfoTable(props) {

	let countPointsRed = React.createRef();
	let onCountPointsRed = () => {
		let text = countPointsRed.current.value;
		props.updateScoreRedAC(text);
	};

	let countPointsBlue = React.createRef();
	let onCountPointsBlue = () => {
		let text = countPointsBlue.current.value;
		props.updateScoreBlueAC(text)
	};

	const lightLed = {
		"background": '#ffff00',
		"box-shadow": '1px 1px 2px #ffee35,\n' +
			 '\t\t 1px -1px 2px #ffee35,\n' +
			 '\t\t 0 2px #fffe60,\n' +
			 '\t\t 0 -2px #fffe60,\n' +
			 '\t\t 1px 1px 5px #ffff9d,\n' +
			 '\t\t -1px -1px 5px #ffff9d,\n' +
			 '\t\t 2px 2px 15px #f8ffcc,\n' +
			 '\t\t -2px -2px 15px #f8ffcc'
	};
	const colorTeam = {
		color: "#ffff00"
	};
	return (
		 <div className={s.header}>

			 <div className={s.red} style={props.roundTeam === 'Red' ? colorTeam : null}>
				 <div className={s.name}>
					 {props.nameTeamRed}
				 </div>
				 <div className={s.score}>
					 {props.scoreRed}
				 </div>
				 <div className={s.refactors}>
					 <input type={'number'}
							  ref={countPointsRed}
							  onChange={onCountPointsRed}
							  value={props.updateScoreRed}
					 />
					 <button onClick={() => { props.changeScoreRed(Number(props.updateScoreRed))}}>Изменить</button>
					 <div className={s.led} style={props.roundTeam === 'Red' ? lightLed : null}/>
				 </div>
			 </div>

			 <div className={s.centerBlock}>
			{/*	 <div className={s.logo}>
					 <NavLink to={'/'}>
					 	<img src={logo}/>
					 </NavLink>
				 </div>*/}
				<div className={s.showArrBntRound}>Перейти к следующему раунду</div>
				 <ul className={s.arrBntRound}>
					<li>
						<NavLink to={'/'}
									activeClassName={s.active}
									className={`${s.button} ${s.pill}`}
									onClick={()=> {
										props.setCountRound();
										props.roundTeamSet(null)
									}}>
							<i className="fas fa-home"/>
						</NavLink>
					</li>
					 <li>
					 <NavLink to={'/round-1'}
								 activeClassName={s.active}
								 className={`${s.button} ${s.pill}`}
								 onClick={()=> {props.setCountRound()}}>
						 Раунд 1
					 </NavLink>
					</li>
					 <li>
					 <NavLink to={'/round-2'}
								 activeClassName={s.active}
								 className={`${s.button} ${s.pill}`}
								 onClick={()=> {props.setCountRound()}}>
						 Раунд 2
					 </NavLink>
				 </li>
					 <li>
					 <NavLink to={'/round-3'}
								 activeClassName={s.active}
								 className={`${s.button} ${s.pill}`}
								 onClick={()=> {props.setCountRound()}}>
						 Раунд 3
					 </NavLink>
			 </li>
					 <li>
					 <NavLink to={'/round-4'}
								 activeClassName={s.active}
								 className={`${s.button} ${s.pill}`}
								 onClick={()=> {props.setCountRound()}}>
						 Раунд 4
					 </NavLink>
		 </li>
				 </ul>
			 </div>

			 <div className={s.blue} style={props.roundTeam === 'Blue' ? colorTeam : null}>
				 <div className={s.upBlock}>
					 <div className={s.name}>
						 {props.nameTeamBlue}
					 </div>
					 <div className={s.score}>
						 {props.scoreBlue}
					 </div>
				 </div>
				 <div className={s.refactors}>
					 <input type={'number'}
							  ref={countPointsBlue}
							  onChange={onCountPointsBlue}
							  value={props.updateScoreBlue}/>
					 <button onClick={() => { props.changeScoreBlue(Number(props.updateScoreBlue))}}>Изменить</button>
				 <div className={s.led} style={props.roundTeam === 'Blue' ? lightLed : null}/>
				 </div>
			 </div>

		 </div>
	)
}

export default HeaderInfoTable;