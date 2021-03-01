import { storeToken, removeToken, getToken } from '../../utils/helpers';
import { SET_LOGIN, SET_LOGOUT, CHECK_LOGIN, userAction } from './user.types';

const initialState = {
    isLogged: false,
    user: [],
};

const userReducer = (
    state = initialState,
    action: userAction,
): typeof initialState => {
    switch (action.type) {
        case SET_LOGIN: {
            const token = action.payload;
            storeToken(token);
            return { ...state, isLogged: true };
        }
        case SET_LOGOUT: {
            removeToken();
            return {
                ...state,
                isLogged: false,
            };
        }
        case CHECK_LOGIN: {
            const token = getToken();
            if (token) {
                return {
                    ...state,
                    isLogged: true,
                };
            }
        }

        default:
            return state;
    }
};

export default userReducer;
