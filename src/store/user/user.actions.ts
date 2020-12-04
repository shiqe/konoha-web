import { SET_LOGIN, SET_LOGOUT } from "./user.types";
import { Action } from "redux";
import { GlobalState } from "../rootReducer";
import { ThunkAction } from "redux-thunk";

export const login = (
    token: string
): ThunkAction<void, GlobalState, unknown, Action<string>> => async (
    dispatch
) => {
    console.log(token);
    const action = { type: SET_LOGIN, payload: token };
    dispatch(action);
};

export const logout = (
    token: string
): ThunkAction<void, GlobalState, unknown, Action<string>> => async (
    dispatch
) => {
    const action = { type: SET_LOGOUT, payload: token };
    dispatch(action);
};
