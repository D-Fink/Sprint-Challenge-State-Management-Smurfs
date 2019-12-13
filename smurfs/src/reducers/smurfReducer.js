import {
    FETCH_SMURFS,
    POST_SMURF
} from '../actions';

const initialState = {
    smurf: []
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
            return {
                smurf: action.payload
            };
        case POST_SMURF:
            return{
                ...state,
                smurf: [
                    ...state.smurf,
                    action.payload
                ]
            }
        default:
            return state;
    };
};

export default reducer