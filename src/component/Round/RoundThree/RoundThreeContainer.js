import React from "react";
import {connect} from 'react-redux'
import RoundThree from "./RoundThree";
import {
	addPointRed,
	addPointBlue,
	nextRound,
	prevRound,
	activeBtnCountPoints,
	visionWordOneAC,
	visionWordTwoAC,
	visionWordThreeAC,
	visionWordFourAC,
	visionWordFiveAC,
	showPromptAC,
	showNameAC,
	timeToThinkAC,
} from './../../../Task/Score'

class RoundThreeContainer extends React.Component {
	render() {
		return <RoundThree {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		roundNum: state.scoreNum.roundNum,
		musicWord: state.scoreNum.musicWord,
		visionWordOne: state.scoreNum.visionWordOne,
		visionWordTwo: state.scoreNum.visionWordTwo,
		visionWordThree: state.scoreNum.visionWordThree,
		visionWordFour: state.scoreNum.visionWordFour,
		visionWordFive: state.scoreNum.visionWordFive,
		showPrompt: state.scoreNum.showPrompt,
		showName: state.scoreNum.showName,
		isActiveBtnCountPoints: state.scoreNum.isActiveBtnCountPoints,
		timeToThink: state.scoreNum.timeToThink,
	}
};


export default connect(mapStateToProps, {
	addPointRed, addPointBlue, nextRound, prevRound, activeBtnCountPoints,
	visionWordOneAC, visionWordTwoAC, visionWordThreeAC, visionWordFourAC, visionWordFiveAC,
	showPromptAC, showNameAC, timeToThinkAC
})(RoundThreeContainer);

