import userReducer from "./user/user.reducer";
import postReducer from "./post/post.reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    user: userReducer,
    post: postReducer,
});

type GlobalState = ReturnType<typeof rootReducer>;

export { rootReducer, GlobalState };
