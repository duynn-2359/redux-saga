import {takeEvery, put} from 'redux-saga/effects';
import {getListPostRemote} from '../apis/api';

import {
  SAVE_POST,
  SAVE_POST_SUCCESS,
  UN_SAVE_POST,
  UN_SAVE_POST_SUCCESS,
  GET_LIST_POST,
  GET_LIST_POST_SUCCESS,
} from '../actions/postActionTypes';

function* _savePost(data) {
  console.log('_savePost');
  yield put({
    type: SAVE_POST_SUCCESS,
    payload: data.payload,
  });
}

function* _unSavePost(data) {
  yield put({
    type: UN_SAVE_POST_SUCCESS,
    payload: data.payload,
  });
}

function* _getListPost() {
  try {
    const json = yield getListPostRemote();
    yield put({
      type: GET_LIST_POST_SUCCESS,
      payload: json,
    });
  } catch (error) {
    console.log(error);
  }
}

export function* savePost() {
  yield takeEvery(SAVE_POST, _savePost);
}

export function* unSavePost() {
  yield takeEvery(UN_SAVE_POST, _unSavePost);
}

export function* getListPost() {
  yield takeEvery(GET_LIST_POST, _getListPost);
}
