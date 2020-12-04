export const SET_POST = "SET_POST";
export const DEL_POST = "DEL_POST";

// Types
interface DelPost {
    type: typeof SET_POST;
    payload: string;
}
interface SetPost {
    type: typeof DEL_POST;
    payload: unknown;
}

export type postAction = SetPost | DelPost ;
