import React from "react";
import {connect} from 'react-redux'
import WhatCommon from "./WhatCommon";
import {
	addPointBlue,
	addPointRed,
	nextRound,
	prevRound, roundTeamSet,
	timerSet,
	timeToThinkAC
} from "../../../store/NavigationsReducer";
import {showAnswerWhatCommon} from "../../../store/WhatCommonReducer";

class WhatCommonContainer extends React.Component {

	render() {
		return <WhatCommon {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		whatCommon: state.whatCommon.whatCommon,
		roundNum: state.navigations.roundNum,
		isShowAnswerWhatCommon: state.whatCommon.isShowAnswerWhatCommon,
		timeToThink: state.navigations.timeToThink,
		timeSet: state.navigations.timeSet,
		timer: state.navigations.timer,
	}
};


export default connect(mapStateToProps, {
	nextRound, prevRound, showAnswerWhatCommon, timeToThinkAC, timerSet,
	addPointRed, addPointBlue,	roundTeamSet
})(WhatCommonContainer);

