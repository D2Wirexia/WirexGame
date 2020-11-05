import {GuessMusic, MusicWord, PutInPlaces, WhatCommon} from "./state-templates";

const ADD_POINT_RED = 'ADD_POINT_RED';
const ADD_POINT_BLUE = 'ADD_POINT_BLUE';
const UPDATE_SCORE_RED = 'UPDATE_SCORE_RED';
const UPDATE_SCORE_BLUE = 'UPDATE_SCORE_BLUE';
const NEXT_ROUND = 'NEXT_ROUND';
const PREV_ROUND = 'PREV_ROUND';
const VISION_WORD_1 = 'VISION_WORD_1';
const VISION_WORD_2 = 'VISION_WORD_2';
const VISION_WORD_3 = 'VISION_WORD_3';
const VISION_WORD_4 = 'VISION_WORD_4';
const VISION_WORD_5 = 'VISION_WORD_5';
const SHOW_PROMPT = 'SHOW_PROMPT';
const SHOW_NAME = 'SHOW_NAME';
const ACTIVE_BTN_COUNT_POINTS = 'ACTIVE_BTN_COUNT_POINTS';
const CHANGE_SCORE_RED = 'CHANGE_SCORE_RED';
const CHANGE_SCORE_BLUE = 'CHANGE_SCORE_BLUE';
const SHOW_ANSWER_PUT_IN_PLACE = 'SHOW_ANSWER_PUT_IN_PLACE';
const SET_COUNT_ROUND = 'SET_COUNT_ROUND';
const SET_RANDOM_PUT_IN_PLACE = 'SET_RANDOM_PUT_IN_PLACE';
const SHOW_ANSWER_WHAT_COMMON = 'SHOW_ANSWER_WHAT_COMMON';
const SHOW_ANSWER_WHAT_MUSIC = 'SHOW_ANSWER_WHAT_MUSIC';
const PLAY_WHAT_MUSIC = 'PLAY_WHAT_MUSIC';
const UPDATE_TEAM_NAME_RED = 'UPDATE_TEAM_NAME_RED';
const UPDATE_TEAM_NAME_BLUE = 'UPDATE_TEAM_NAME_BLUE';
const CHANGE_TEAM_NAME_RED = 'CHANGE_TEAM_NAME_RED';
const CHANGE_TEAM_NAME_BLUE = 'CHANGE_TEAM_NAME_BLUE';
const TIME_TO_THINK = 'TIME_TO_THINK';
const UPDATE_TIMER = 'UPDATE_TIMER';
const CHANGE_UPDATE_TIMER = 'CHANGE_UPDATE_TIMER';


let initialState = {
	musicWord: MusicWord,
	putInPlaces: PutInPlaces,
	randomPutInPlaces: [],
	whatCommon: WhatCommon,
	guessMusic: GuessMusic,
	scoreRed: 0,
	scoreBlue: 0,
	roundNum: 1,
	updateScoreRed: '',
	updateScoreBlue: '',
	nameTeamRed: 'Red',
	nameTeamBlue: 'Blue',
	updateTeamNameRed: '',
	updateTeamNameBlue: '',
	visionWordOne: false,
	visionWordTwo: false,
	visionWordThree: false,
	visionWordFour: false,
	visionWordFive: false,
	showPrompt: false,
	showName: false,
	isActiveBtnCountPoints: true,
	isShowAnswerPutInPlace: false,
	isShowAnswerWhatCommon: false,
	isShowAnswerWhatMusic: false,
	isPlayWhatMusic: false,
	timeSet: 60,
	timeToThink: 60,
	updateTimeToThink: '',
};
const scoreReducer = (state = initialState, action) => {
	switch (action.type) {
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
		case VISION_WORD_1: {
			return {
				...state,
				visionWordOne: action.showWord
			}
		}
		case VISION_WORD_2: {
			return {
				...state,
				visionWordTwo: action.showWord
			}
		}
		case VISION_WORD_3: {
			return {
				...state,
				visionWordThree: action.showWord
			}
		}
		case VISION_WORD_4: {
			return {
				...state,
				visionWordFour: action.showWord
			}
		}
		case VISION_WORD_5: {
			return {
				...state,
				visionWordFive: action.showWord
			}
		}
		case SHOW_PROMPT: {
			return {
				...state,
				showPrompt: action.showPrompt
			}
		}
		case SHOW_NAME: {
			return {
				...state,
				showName: action.showName
			}
		}
		case ACTIVE_BTN_COUNT_POINTS: {
			return {
				...state,
				isActiveBtnCountPoints: action.activeBtnCountPoints,
			}
		}
		case SHOW_ANSWER_PUT_IN_PLACE: {
			return {
				...state,
				isShowAnswerPutInPlace: action.isShowAnswerPutInPlace,
			}
		}
		case SET_COUNT_ROUND: {
			return {
				...state,
				roundNum: 1
			}
		}
		case SET_RANDOM_PUT_IN_PLACE: {
			return {
				...state,
				randomPutInPlaces: action.randomPutInPlaces
			}
		}
		case SHOW_ANSWER_WHAT_COMMON: {
			return {
				...state,
				isShowAnswerWhatCommon: action.showAnswerWhatCommon,
			}
		}
		case SHOW_ANSWER_WHAT_MUSIC: {
			return {
				...state,
				isShowAnswerWhatMusic: action.showAnswerWhatMusic,
			}
		}
		case PLAY_WHAT_MUSIC: {
			return {
				...state,
				isPlayWhatMusic: action.playWhatMusic,
			}
		}
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
		case TIME_TO_THINK: {
			return {
				...state,
				timeToThink: action.updateTimer,
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
		default:
			return state
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
export const visionWordOneAC = (showWord) => {
	return{
		type: VISION_WORD_1,
		showWord
	}
};
export const visionWordTwoAC = (showWord) => {
	return{
		type: VISION_WORD_2,
		showWord
	}
};
export const visionWordThreeAC = (showWord) => {
	return{
		type: VISION_WORD_3,
		showWord
	}
};
export const visionWordFourAC = (showWord) => {
	return{
		type: VISION_WORD_4,
		showWord
	}
};
export const visionWordFiveAC = (showWord) => {
	return{
		type: VISION_WORD_5,
		showWord
	}
};
export const showPromptAC = (showPrompt) => {
	return{
		type: SHOW_PROMPT,
		showPrompt
	}
};
export const showNameAC = (showName) => {
	return{
		type: SHOW_NAME,
		showName
	}
};
export const activeBtnCountPoints = (activeBtnCountPoints) => {
	return{
		type: ACTIVE_BTN_COUNT_POINTS,
		activeBtnCountPoints
	}
};
export const showAnswerPutInPlace = (isShowAnswerPutInPlace) => {
	return{
		type: SHOW_ANSWER_PUT_IN_PLACE,
		isShowAnswerPutInPlace
	}
};
export const setCountRound = () => {
	return {
		type: SET_COUNT_ROUND,
	}
};
export const setRandomPutInPlace = (randomPutInPlaces) => {
	return{
		type: SET_RANDOM_PUT_IN_PLACE,
		randomPutInPlaces
	}
};
export const showAnswerWhatCommon = (showAnswerWhatCommon) => {
	return{
		type: SHOW_ANSWER_WHAT_COMMON,
		showAnswerWhatCommon
	}
};
export const showAnswerWhatMusic = (showAnswerWhatMusic) => {
	return{
		type: SHOW_ANSWER_WHAT_MUSIC,
		showAnswerWhatMusic
	}
};
export const playWhatMusic = (playWhatMusic) => {
	return{
		type: PLAY_WHAT_MUSIC,
		playWhatMusic
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

export const timeToThinkAC = (updateTimer) => {
	return{
		type: TIME_TO_THINK,
		updateTimer
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


export default scoreReducer;

