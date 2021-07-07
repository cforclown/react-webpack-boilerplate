import ActionTypes from "./action-types";

export function SetSession(session) {
    return {
        type: ActionTypes.SET_SESSION,
        param: {
            session: session,
        },
    };
}
export function DeleteSession() {
    return {
        type: ActionTypes.DELETE_SESSION,
        param: null,
    };
}
