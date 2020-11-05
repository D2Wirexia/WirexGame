import React from "react";
import {connect} from "react-redux";
import RoundFour from "./RoundFour";
import {
	activeBtnCountPoints,
	addPointBlue,
	addPointRed,
	nextRound,
	prevRound,
	showAnswerPutInPlace,
	setRandomPutInPlace
} from "../../../Task/Score";

class RoundFourContainer extends React.Component{


	render() {
		return <RoundFour {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return{
		putInPlaces: state.scoreNum.putInPlaces,
		roundNum: state.scoreNum.roundNum,
		isActiveBtnCountPoints: state.scoreNum.isActiveBtnCountPoints,
		isShowAnswerPutInPlace: state.scoreNum.isShowAnswerPutInPlace,


		randomPutInPlaces: state.scoreNum.randomPutInPlaces
	}
};

export default connect(mapStateToProps, {
	addPointRed, addPointBlue, nextRound, prevRound, activeBtnCountPoints, showAnswerPutInPlace, setRandomPutInPlace
})(RoundFourContainer);