import {createStore, applyMiddleware} from 'redux';
import allReducers from '../reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
