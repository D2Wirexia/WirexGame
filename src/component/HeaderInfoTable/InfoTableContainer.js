import React from "react";
import {connect} from "react-redux";
import HeaderInfoTable from "./HeaderInfoTable";
import {
	changeScoreBlue,
	changeScoreRed,
	updateScoreBlueAC,
	updateScoreRedAC,
	setCountRound
} from "../../Task/Score";

class InfoTableContainer extends React.Component {
	render() {
		return <HeaderInfoTable {...this.props}/>
	}
}


let mapStateToProps = (state) => {
	return {
		updateScoreRed: state.scoreNum.updateScoreRed,
		updateScoreBlue: state.scoreNum.updateScoreBlue,
		nameTeamRed: state.scoreNum.nameTeamRed,
		nameTeamBlue: state.scoreNum.nameTeamBlue,
		scoreRed: state.scoreNum.scoreRed,
		scoreBlue: state.scoreNum.scoreBlue,
		roundTeam: state.scoreNum.roundTeam,
	}
};

export default connect(mapStateToProps, {
	updateScoreRedAC, updateScoreBlueAC, changeScoreRed, changeScoreBlue, setCountRound
})(InfoTableContainer);