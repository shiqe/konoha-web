export const SET_LOGIN = 'SET_LOGIN';
export const SET_LOGOUT = 'SET_LOGOUT';
export const CHECK_LOGIN = 'CHECK_LOGIN';

// Types
interface SetLogin {
    type: typeof SET_LOGIN;
    payload: string;
}
interface SetLogout {
    type: typeof SET_LOGOUT;
    payload: null;
}

interface CheckLogin {
    type: typeof CHECK_LOGIN;
    payload: null;
}

export type userAction = SetLogin | SetLogout | CheckLogin;
