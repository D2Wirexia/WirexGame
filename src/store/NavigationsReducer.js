const UPDATE_TEAM_NAME_RED = 'UPDATE_TEAM_NAME_RED';
const UPDATE_TEAM_NAME_BLUE = 'UPDATE_TEAM_NAME_BLUE';
const CHANGE_TEAM_NAME_RED = 'CHANGE_TEAM_NAME_RED';
const CHANGE_TEAM_NAME_BLUE = 'CHANGE_TEAM_NAME_BLUE';
const UPDATE_TIMER = 'UPDATE_TIMER';
const CHANGE_UPDATE_TIMER = 'CHANGE_UPDATE_TIMER';
const SET_COUNT_ROUND = 'SET_COUNT_ROUND';
const NEXT_ROUND = 'NEXT_ROUND';
const PREV_ROUND = 'PREV_ROUND';
const TIME_TO_THINK = 'TIME_TO_THINK';
const TIME_TO_THINK_ROUND_THREE = 'TIME_TO_THINK_ROUND_THREE';
const TIMER_SET = 'TIMER_SET';
const UPDATE_SCORE_RED = 'UPDATE_SCORE_RED';
const UPDATE_SCORE_BLUE = 'UPDATE_SCORE_BLUE';
const CHANGE_SCORE_RED = 'CHANGE_SCORE_RED';
const CHANGE_SCORE_BLUE = 'CHANGE_SCORE_BLUE';
const ADD_POINT_RED = 'ADD_POINT_RED';
const ADD_POINT_BLUE = 'ADD_POINT_BLUE';
const SET_ROUND_TEAM = 'SET_ROUND_TEAM';
const ACTIVE_BTN_COUNT_POINTS = 'ACTIVE_BTN_COUNT_POINTS';

let initialState = {
	nameTeamRed: 'Red',
	nameTeamBlue: 'Blue',
	updateTeamNameRed: '',
	updateTeamNameBlue: '',
	roundNum: 1,
	timeSet: 60,
	timeToThink: 60,
	timer: null,
	updateScoreRed: '',
	updateScoreBlue: '',
	scoreRed: 0,
	scoreBlue: 0,
	timeLeftRoundThree: 30,
};
const NavigationsReducer = (state = initialState, action) => {
	switch (action.type) {
		case UPDATE_TEAM_NAME_RED: {
			return {
				...state,
				updateTeamNameRed: action.updateTeamName,
			}
		}
		case UPDATE_TEAM_NAME_BLUE: {
			return {
				...state,
				updateTeamNameBlue: action.updateTeamName,
			}
		}
		case CHANGE_TEAM_NAME_RED: {
			return {
				...state,
				nameTeamRed: action.text,
			}
		}
		case CHANGE_TEAM_NAME_BLUE: {
			return {
				...state,
				nameTeamBlue: action.text,
			}
		}
		case UPDATE_TIMER: {
			return {
				...state,
				updateTimeToThink: action.updateTimer,
			}
		}
		case CHANGE_UPDATE_TIMER: {
			return {
				...state,
				timeSet: action.newTime,
				timeToThink: action.newTime
			}
		}
		case SET_COUNT_ROUND: {
			return {
				...state,
				roundNum: 1
			}
		}
		case NEXT_ROUND: {
			return {
				...state,
				roundNum: state.roundNum + 1
			}
		}
		case PREV_ROUND: {
			return {
				...state,
				roundNum: state.roundNum - 1
			}
		}
		case TIME_TO_THINK: {
			return {
				...state,
				timeToThink: action.updateTimer,
			}
		}
		case TIME_TO_THINK_ROUND_THREE: {
			return {
				...state,
				timeLeftRoundThree: action.timeLeftRoundThree,
			}
		}
		case TIMER_SET: {
			return {
				...state,
				timer: action.timer
			}
		}
		case UPDATE_SCORE_RED: {
			return {
				...state,
				updateScoreRed: action.text,
			}
		}
		case UPDATE_SCORE_BLUE: {
			return {
				...state,
				updateScoreBlue: action.text
			}
		}
		case CHANGE_SCORE_RED: {
			return {
				...state,
				scoreRed: action.point,
				updateScoreRed: ''
			}
		}
		case CHANGE_SCORE_BLUE: {
			return {
				...state,
				scoreBlue: action.point,
				updateScoreBlue: ''
			}
		}
		case ADD_POINT_RED: {
			return {
				...state,
				scoreRed: state.scoreRed + action.point
			}
		}
		case ADD_POINT_BLUE: {
			return {
				...state,
				scoreBlue: state.scoreBlue + action.point
			}
		}
		case SET_ROUND_TEAM: {
			return {
				...state,
				roundTeam: action.name
			}
		}
		case ACTIVE_BTN_COUNT_POINTS: {
			return {
				...state,
				isActiveBtnCountPoints: action.activeBtnCountPoints,
			}
		}
		default: return state
	}
};

export const updateTeamNameRedAC = (updateTeamName) => {
	return{
		type: UPDATE_TEAM_NAME_RED,
		updateTeamName
	}
};
export const updateTeamNameBlueAC = (updateTeamName) => {
	return{
		type: UPDATE_TEAM_NAME_BLUE,
		updateTeamName
	}
};
export const changeTeamNameRed = (text) => {
	return{
		type: CHANGE_TEAM_NAME_RED,
		text
	}
};
export const changeTeamNameBlue = (text) => {
	return{
		type: CHANGE_TEAM_NAME_BLUE,
		text
	}
};
export const updateTimer = (updateTimer) => {
	return{
		type: UPDATE_TIMER,
		updateTimer
	}
};
export const changeUpdateTimer = (newTime) => {
	return{
		type: CHANGE_UPDATE_TIMER,
		newTime
	}
};
export const setCountRound = () => {
	return {
		type: SET_COUNT_ROUND,
	}
};
export const nextRound = () => {
	return{
		type: NEXT_ROUND,
	}
};
export const prevRound = () => {
	return{
		type: PREV_ROUND,

	}
};
export const timeToThinkAC = (updateTimer) => {
	return{
		type: TIME_TO_THINK,
		updateTimer
	}
};
export const timeToThinkRoundThreeAC = (timeLeftRoundThree) => {
	return{
		type: TIME_TO_THINK_ROUND_THREE,
		timeLeftRoundThree
	}
};
export const timerSet = (timer) => {
	return{
		type: TIMER_SET,
		timer
	}
};
export const updateScoreRedAC = (text) => {
	return{
		type: UPDATE_SCORE_RED,
		text
	}
};
export const updateScoreBlueAC = (text) => {
	return{
		type: UPDATE_SCORE_BLUE,
		text
	}
};
export const changeScoreRed = (point) => {
	return{
		type: CHANGE_SCORE_RED,
		point
	}
};
export const changeScoreBlue = (point) => {
	return{
		type: CHANGE_SCORE_BLUE,
		point
	}
};
export const addPointRed = (point) => {
	return {
		type: ADD_POINT_RED,
		point
	}
};
export const addPointBlue = (point) => {
	return {
		type: ADD_POINT_BLUE,
		point
	}
};
export const roundTeamSet = (name) => {
	return{
		type: SET_ROUND_TEAM,
		name
	}
};
export const activeBtnCountPoints = (activeBtnCountPoints) => {
	return{
		type: ACTIVE_BTN_COUNT_POINTS,
		activeBtnCountPoints
	}
};

export default NavigationsReducer;