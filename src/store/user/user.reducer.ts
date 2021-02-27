import { storeToken, removeToken } from '../../utils/helpers';
import { SET_LOGIN, SET_LOGOUT, userAction } from './user.types';

const initialState = {
    isLogged: false,
    user: [],
};

const userReducer = (
    state = initialState,
    action: userAction,
): typeof initialState => {
    switch (action.type) {
        case SET_LOGIN:
            const token = action.payload;
            storeToken(token);
            return { ...state, isLogged: true };
        case SET_LOGOUT:
            removeToken();
            return {
                ...state,
                isLogged: false,
            };

        default:
            return state;
    }
};

export default userReducer;
