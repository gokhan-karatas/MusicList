import * as WebService from "../services/webservice"
import * as actionTypes from "../constants/actionTypes"

const receiveSearchResult = (data) => ({
    type: actionTypes.GET_SEARCH_RESULT_DATA,
    payload: data
});

export const getSearchResult = (params) => dispatch => {
    WebService.getSearchResultData(params)
        .then((res) => {
            if (res.data.results) {
                dispatch(receiveSearchResult(res.data.results));
            }
        });
};
