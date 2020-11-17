import {
  SAVE_POST,
  UN_SAVE_POST,
  GET_LIST_POST,
} from '../actions/postActionTypes.js';

export const savePost = (data) => ({
  type: SAVE_POST,
  payload: data,
});

export const unSavePost = (data) => ({
  type: UN_SAVE_POST,
  payload: data,
});

export const getListPost = () => ({
  type: GET_LIST_POST,
});
