import {DUMMY} from "./constant";

const dummyReducer = (state = {}, action: {type: string, payload: any}) => {
    switch (action.type) {
        case DUMMY:
            return {
                ...state,
            };
        default:
            return state;
    }
};

export default dummyReducer;
