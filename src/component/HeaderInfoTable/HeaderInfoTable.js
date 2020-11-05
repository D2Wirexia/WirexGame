import React from "react";
import s from './HeaderInfoTable.module.css'
import {NavLink} from 'react-router-dom'
import logo from './../../library/mainWirexia.png'

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

	return (
		 <div className={s.header}>

			 <div className={s.red}>
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
				 </div>
			 </div>

			 <div className={s.centerBlock}>
				 <div className={s.logo}>
					 <NavLink to={'/'}>
					 	<img src={logo}/>
					 </NavLink>
				 </div>

				 <ul className={s.arrBntRound}>
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

			 <div className={s.blue}>
				 <div className={s.name}>
					 {props.nameTeamBlue}
				 </div>
				 <div className={s.score}>
					 {props.scoreBlue}
				 </div>
				 <div className={s.refactors}>
					 <input type={'number'}
							  ref={countPointsBlue}
							  onChange={onCountPointsBlue}
							  value={props.updateScoreBlue}/>
					 <button onClick={() => { props.changeScoreBlue(Number(props.updateScoreBlue))}}>Изменить</button>
				 </div>
			 </div>

		 </div>
	)
}

export default HeaderInfoTable;