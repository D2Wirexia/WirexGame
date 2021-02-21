import React from "react";
import {connect} from "react-redux";
import PutInPlace from "./PutInPlace";
import {
	activeBtnCountPoints,
	addPointBlue,
	addPointRed,
	nextRound,
	prevRound,
	roundTeamSet
} from "../../../store/NavigationsReducer";
import {
	chooseVar1,
	chooseVar2,
	chooseVar3,
	chooseVar4,
	chooseVar5, chooseVar6, showAnswerPutInPlace
} from "../../../store/PutInPlaceReducer";

class PutInPlaceContainer extends React.Component{
	render() {
		return <PutInPlace {...this.props}/>
	}
}

let mapStateToProps = (state) => {
	return{
		putInPlaces: state.putInPlace.putInPlaces,
		roundNum: state.navigations.roundNum,
		isActiveBtnCountPoints: state.navigations.isActiveBtnCountPoints,
		isShowAnswerPutInPlace: state.putInPlace.isShowAnswerPutInPlace,
		chooseVariants1: state.putInPlace.chooseVariants1,
		chooseVariants2: state.putInPlace.chooseVariants2,
		chooseVariants3: state.putInPlace.chooseVariants3,
		chooseVariants4: state.putInPlace.chooseVariants4,
		chooseVariants5: state.putInPlace.chooseVariants5,
		chooseVariants6: state.putInPlace.chooseVariants6,
	}
};

export default connect(mapStateToProps, {
	addPointRed, addPointBlue, roundTeamSet,
	chooseVar1, chooseVar2, chooseVar3, chooseVar4, chooseVar5, chooseVar6,
	nextRound, prevRound, activeBtnCountPoints, showAnswerPutInPlace
})(PutInPlaceContainer);