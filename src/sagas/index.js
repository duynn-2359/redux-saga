import {all} from 'redux-saga/effects';

//Actions
import {savePost, unSavePost, getListPost} from './postSagas';

export default function* rootSaga() {
  yield all([savePost(), unSavePost(), getListPost()]);
}
