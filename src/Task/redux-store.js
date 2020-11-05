import scoreReducer from "./Score";
import {combineReducers, createStore} from "redux";

let reducers = combineReducers({
	scoreNum: scoreReducer
});
let store = createStore(reducers);

window.store = store;

export default store;