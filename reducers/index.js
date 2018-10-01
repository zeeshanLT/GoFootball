import {combineReducers} from 'redux';
import statsReducer from 'GoFootball/reducers/statsReducer';
export default combineReducers({
	stats: statsReducer
});