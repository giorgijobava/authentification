import { LOG_IN } from "./actions";

const initialState = {
    isAuthenticated: false,
    user: null
}

const reducer = (state, actions) => {
const {type, payload} = actions;
switch (type) {
    case LOG_IN:
        console.log("log_in");
        
        
        break;

    default:
        break;
}
};

export { initialState, reducer };

