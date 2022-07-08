import { combineReducers } from "redux";

import getPosts from "./getPosts";
import updatePost from "./updatePost";
import deletePost from "./deletePost";

export default combineReducers({
    getPosts,
    updatePost,
    deletePost
});
