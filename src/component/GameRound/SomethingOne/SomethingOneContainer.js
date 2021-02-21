import React from "react";
import {connect} from 'react-redux'
import SomethingOne from "./SomethingOne";
import {
	addPointBlue,
	addPointRed,
	nextRound,
	prevRound, roundTeamSet,
	timerSet,
	timeToThinkAC
} from "../../../store/NavigationsReducer";
import {varOneAC, varThreeAC, varTwoAC} from "../../../store/SomethingOneReducer";

class SomethingOneContainer extends React.Component {
	render() {
		return <SomethingOne {...this.props} />
	}
}
let mapStateToProps = (state) => {
	return {
		oneOfTheThree: state.somethingOne.oneOfTheThree,
		roundNum: state.navigations.roundNum,
		nameTeamRed: state.navigations.nameTeamRed,
		nameTeamBlue: state.navigations.nameTeamBlue,
		timeToThink: state.navigations.timeToThink,
		timeSet: state.navigations.timeSet,
		timer: state.navigations.timer,
		varOne: state.somethingOne.varOne,
		varTwo: state.somethingOne.varTwo,
		varThree: state.somethingOne.varThree,
	}
};


export default connect(mapStateToProps, {
	nextRound, prevRound, timeToThinkAC, timerSet, addPointRed, addPointBlue, roundTeamSet,
	varOneAC, varTwoAC, varThreeAC
})(SomethingOneContainer);

