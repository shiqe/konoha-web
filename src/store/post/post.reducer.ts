import { SET_POST, DEL_POST, postAction } from "./post.types";

const initialState = {
    posts: [],
};

const postReducer = (
    state = initialState,
    action: postAction
): typeof initialState => {
    switch (action.type) {
        case SET_POST:
            return { posts: [...state.posts, action.payload] };
        case DEL_POST:
            return {
                posts: state.posts.filter((item) => item._id != action.payload),
            };

        default:
            return state;
    }
};

export default postReducer;
