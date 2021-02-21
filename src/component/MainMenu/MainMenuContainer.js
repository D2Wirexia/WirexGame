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
} from "../../store/NavigationsReducer";

class MainMenuContainer extends React.Component {
	render() {
		return <MainMenu {...this.props}/>
	}
}
let mapStateToProps = (state) => {
	return {
		updateTeamNameRed: state.navigations.updateTeamNameRed,
		updateTeamNameBlue: state.navigations.updateTeamNameBlue,
		updateTimeToThink: state.navigations.updateTimeToThink

	}
};


export default connect(mapStateToProps, {
	updateTeamNameRedAC, updateTeamNameBlueAC, changeTeamNameRed, changeTeamNameBlue, changeUpdateTimer, updateTimer
})(MainMenuContainer);

