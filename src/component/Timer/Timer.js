import React from "react";
import s from "./Timer.module.css";

class Timer extends React.Component{
	state = {
		timeLeft: this.props.time,
		timer: null,
		conditionTimer: this.props.conditionTimer,
		removeTimer: this.props.removeTimer,
		isFetchButtonStartTimer: this.props.isFetchButtonStartTimer
	};

	startTimer = (timeLeft) => {
		clearInterval(this.state.timer);
		let timer = setInterval( () => {
			if(this.props.removeTimer){clearInterval(this.state.timer)}
			let timeLeft = this.state.timeLeft - 1;
			if (timeLeft === 0){clearInterval(timer)}
			this.setState({timeLeft})
		}, 1000);
		return this.setState({timeLeft, timer})
	};


	componentDidMount() {

	}

	componentDidUpdate(prevProps) {

		if(prevProps.conditionTimer !== this.props.conditionTimer) {
			this.setState({conditionTimer: this.props.conditionTimer});
			if(this.state.conditionTimer >= 3) {
				this.startTimer(this.props.time);
			}else{
				clearInterval(this.state.timer);
			}
		}
		if(prevProps.isFetchButtonStartTimer !== this.props.isFetchButtonStartTimer){
			this.setState({isFetchButtonStartTimer: this.props.isFetchButtonStartTimer});
			this.startTimer(this.props.time);
		}
		if (prevProps.removeTimer !== this.props.removeTimer) {
			this.setState({removeTimer: this.props.removeTimer});
			if(this.state.removeTimer){
				clearInterval(this.state.timer);
				this.setState({timeLeft: this.props.time})
			}
		}
	}

	render() {
		return(
			 <div className={s.timerBlock}>
				 <div className={s.blockTime}>
					 <div/>
					 <div/>
				 </div>
				 <div className={this.state.timeLeft > 9 ? s.much : s.low}>
					 {
						 this.state.timeLeft > 0
							  ? this.state.timeLeft < 10 ? '0' + this.state.timeLeft : this.state.timeLeft
							  : '00'
					 }
				 </div>
			 </div>
		);
	}
}

export default Timer;