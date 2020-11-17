import {
  SAVE_POST_SUCCESS,
  UN_SAVE_POST_SUCCESS,
  GET_LIST_POST_SUCCESS,
} from '../actions/postActionTypes.js';

const initialState = {
  savedPosts: [],
  listPosts: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_POST_SUCCESS:
      return {
        ...state,
        savedPosts: [...state.savedPosts, action.payload],
      };
    case UN_SAVE_POST_SUCCESS:
      return {
        ...state,
        savedPosts: state.savedPosts.filter(
          (post) => post.id !== action.payload.id,
        ),
      };
    case GET_LIST_POST_SUCCESS:
      return {
        ...state,
        listPosts: action.payload,
      };
    default:
      return state;
  }
};
