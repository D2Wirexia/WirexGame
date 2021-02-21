import React from "react";
import s from "./Timer.module.css";

class Timer extends React.Component{
	state = {
		timeLeft: this.props.time,
		timer: null
	};

	startTimer = (timeLeft) => {
		clearInterval(this.state.timer);
		let timer = setInterval( () => {
			let timeLeft = this.state.timeLeft - 1;
			if (timeLeft === 0){
				clearInterval(timer)
			}
			this.setState({timeLeft})
		}, 1000);
		return this.setState({timeLeft, timer})
	};


	componentDidMount() {
		if(this.props.conditionTimer >= 1) {
			this.startTimer(this.props.time);
		}
	}

	componentDidUpdate(prevProps, prevState) {

			if(prevState.timeLeft !== this.state.timeLeft){
				this.setState({timeLeft: this.state.timeLeft})
			}

	}

	render() {

		return(
			 <div className={s.timerBlock}>
				 <div className={s.blockTime}>
					 <div/>
					 <div/>
				 </div>
				 <div className={this.state.timeLeft > 9 ? s.much : s.low}
						onClick={()=>this.startTimer(this.props.time)}>
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