import React from "react";
import {connect} from 'react-redux'
import MainMenu from "./MainMenu";
import {
	updateTeamNameRedAC,
	updateTeamNameBlueAC,
	changeTeamNameRed,
	changeTeamNameBlue,
	changeUpdateTimer,
	updateTimer
} from "../../Task/Score";

class MainMenuContainer extends React.Component {
	render() {
		return <MainMenu {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		updateTeamNameRed: state.scoreNum.updateTeamNameRed,
		updateTeamNameBlue: state.scoreNum.updateTeamNameBlue,
		updateTimeToThink: state.scoreNum.updateTimeToThink

	}
};


export default connect(mapStateToProps, {
	updateTeamNameRedAC, updateTeamNameBlueAC, changeTeamNameRed, changeTeamNameBlue, changeUpdateTimer, updateTimer
})(MainMenuContainer);

