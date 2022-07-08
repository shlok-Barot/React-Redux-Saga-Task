import {
  GET_POSTS,
  DELETE_POST,
  UPDATE_POST
} from "./actionTypes";

export const getPosts = () => {
  return {
      type: GET_POSTS,
  };
};

export const updatePost = (data) => {
  return {
      type: UPDATE_POST, payload: data
  };
};
export const deletePost = (id) => {
  return {
      type: DELETE_POST, payload: id
  };
};