export const SET_LOGIN = "SET_LOGIN";
export const SET_LOGOUT = "SET_LOGOUT";

// Types
interface SetLogin {
    type: typeof SET_LOGIN;
    payload: string;
}
interface SetLogout {
    type: typeof SET_LOGOUT;
    payload: unknown;
}

export type userAction = SetLogin | SetLogout ;
