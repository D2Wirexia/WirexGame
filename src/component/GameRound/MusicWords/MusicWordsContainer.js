import React from "react";
import {connect} from 'react-redux'
import MusicWords from "./MusicWords";
import {
	activeBtnCountPoints,
	addPointBlue,
	addPointRed,
	nextRound,
	prevRound, roundTeamSet,
	timerSet,
	timeToThinkRoundThreeAC
} from "../../../store/NavigationsReducer";
import {
	showNameAC, showPromptAC,
	visionWordFiveAC,
	visionWordFourAC,
	visionWordOneAC,
	visionWordThreeAC,
	visionWordTwoAC
} from "../../../store/MusicWordsReducer";

class MusicWordsContainer extends React.Component {


	render() {
		return <MusicWords {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		roundNum: state.navigations.roundNum,
		musicWord: state.musicWords.musicWord,
		visionWordOne: state.musicWords.visionWordOne,
		visionWordTwo: state.musicWords.visionWordTwo,
		visionWordThree: state.musicWords.visionWordThree,
		visionWordFour: state.musicWords.visionWordFour,
		visionWordFive: state.musicWords.visionWordFive,
		showPrompt: state.musicWords.showPrompt,
		showName: state.musicWords.showName,
		isActiveBtnCountPoints: state.navigations.isActiveBtnCountPoints,
	}
};


export default connect(mapStateToProps, {
	nextRound, prevRound, timeToThinkRoundThreeAC, timerSet, addPointRed, addPointBlue, roundTeamSet,
	visionWordOneAC, visionWordTwoAC, visionWordThreeAC, visionWordFourAC, visionWordFiveAC,
	activeBtnCountPoints, showPromptAC, showNameAC
})(MusicWordsContainer);

