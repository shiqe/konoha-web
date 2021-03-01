import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { GlobalState } from '../rootReducer';
import { SET_LOGIN, SET_LOGOUT } from './user.types';

export const login = (
    token: string,
): ThunkAction<void, GlobalState, unknown, Action<string>> => async (
    dispatch,
) => {
    const action = { type: SET_LOGIN, payload: token };
    dispatch(action);
};

export const logout = (): ThunkAction<
    void,
    GlobalState,
    unknown,
    Action<string>
> => async (dispatch) => {
    const action = { type: SET_LOGOUT, payload: null };
    dispatch(action);
};
