import {
    GET_SEARCH_RESULT_DATA
} from '../constants/actionTypes'

const initialState = {success:null};

const homeReducer = (state = initialState,action) => {
    // console.log('action.type = ----------------------------------', action.type);
    // console.log('action.payload = ----------------------------------', action.payload);
    // console.log('state = ----------------------------------', state);

    switch (action.type){
        case GET_SEARCH_RESULT_DATA:
            return {
                ...state,
                searchData:{...state.success,...action.payload}
            };
        default:
            return state;
    }
};

export default homeReducer;