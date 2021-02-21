import React from "react";
import {connect} from "react-redux";
import HeaderInfoTable from "./HeaderInfoTable";
import {
	changeScoreBlue,
	changeScoreRed,
	updateScoreBlueAC,
	updateScoreRedAC,
	setCountRound
} from "../../store/NavigationsReducer";

class InfoTableContainer extends React.Component {
	render() {
		return <HeaderInfoTable {...this.props}/>
	}
}


let mapStateToProps = (state) => {
	return {
		updateScoreRed: state.navigations.updateScoreRed,
		updateScoreBlue: state.navigations.updateScoreBlue,
		nameTeamRed: state.navigations.nameTeamRed,
		nameTeamBlue: state.navigations.nameTeamBlue,
		scoreRed: state.navigations.scoreRed,
		scoreBlue: state.navigations.scoreBlue,

		roundTeam: state.navigations.roundTeam,
	}
};

export default connect(mapStateToProps, {
	updateScoreRedAC, updateScoreBlueAC, changeScoreRed, changeScoreBlue, setCountRound
})(InfoTableContainer);