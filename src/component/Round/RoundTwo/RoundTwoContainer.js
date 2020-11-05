import React from "react";
import {connect} from 'react-redux'
import RoundTwo from "./RoundTwo";
import {
	nextRound,
	prevRound,
	addPointRed,
	addPointBlue,
	showAnswerWhatMusic,
	playWhatMusic
} from "./../../../Task/Score";
import {timeToThinkAC} from "./../../../Task/Score";

class RoundTwoContainer extends React.Component {
	render() {
		return <RoundTwo {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		guessMusic: state.scoreNum.guessMusic,
		roundNum: state.scoreNum.roundNum,
		isShowAnswerWhatMusic: state.scoreNum.isShowAnswerWhatMusic,
		isPlayWhatMusic: state.scoreNum.isPlayWhatMusic,
		nameTeamRed: state.scoreNum.nameTeamRed,
		nameTeamBlue: state.scoreNum.nameTeamBlue,
		timeToThink: state.scoreNum.timeToThink,
		timeSet: state.scoreNum.timeSet
	}
};


export default connect(mapStateToProps, {
	nextRound, prevRound, addPointRed, addPointBlue, showAnswerWhatMusic, playWhatMusic, timeToThinkAC
})(RoundTwoContainer);

