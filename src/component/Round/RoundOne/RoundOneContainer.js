import React from "react";
import {connect} from 'react-redux'
import RoundOne from "./RoundOne";
import {
	nextRound,
	prevRound,
	addPointRed,
	addPointBlue,
	showAnswerWhatCommon,
	timeToThinkAC,
} from "./../../../Task/Score";

class RoundOneContainer extends React.Component {

	render() {
		return <RoundOne {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		whatCommon: state.scoreNum.whatCommon,
		roundNum: state.scoreNum.roundNum,
		isShowAnswerWhatCommon: state.scoreNum.isShowAnswerWhatCommon,
		timeToThink: state.scoreNum.timeToThink,
		timeSet: state.scoreNum.timeSet
	}
};


export default connect(mapStateToProps, {
	nextRound, prevRound, addPointRed, addPointBlue, showAnswerWhatCommon, timeToThinkAC,
})(RoundOneContainer);

