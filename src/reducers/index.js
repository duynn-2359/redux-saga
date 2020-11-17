import {combineReducers} from 'redux';
import postReducer from '../reducers/postReducer';

const allReducers = combineReducers({
  postReducer: postReducer,
});
export default allReducers;
