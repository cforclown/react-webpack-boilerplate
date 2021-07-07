import Cookies from "universal-cookie";

import ActionTypes from "./action-types";
// import { SetSession } from "../../Api/AuthApi";

const cookies = new Cookies();

const initialState = {
    session: null,
};

const Reducer = (state = initialState, action) => {
    if (action.type === ActionTypes.SET_SESSION) {
        // SetSession(action.param.session);

        cookies.set(process.env.SESSION_TAG, JSON.stringify(action.param.session), {
            path: "/",
            maxAge: action.param.session.expiredIn ? action.param.session.expiredIn : 5400,
        });

        return { ...state, session: action.param.session };
    } else if (action.type === ActionTypes.DELETE_USER_SESSION) {
        cookies.remove(process.env.SESSION_TAG, { path: "/" });
        return { ...state, session: null };
    } else return state;
};

export default Reducer;
