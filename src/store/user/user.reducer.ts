import { SET_LOGIN, SET_LOGOUT, userAction } from "./user.types";

const initialState = {
    isLogged: false,
    user: [],
};

const userReducer = (
    state = initialState,
    action: userAction
): typeof initialState => {
    switch (action.type) {
        case SET_LOGIN:
            return { ...state, isLogged: true };
        case SET_LOGOUT:
            return {
                ...state,
                isLogged: false,
            };

        default:
            return state;
    }
};

export default userReducer;
