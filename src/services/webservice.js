import axios from 'axios';

export const getSearchResultData = (params) => {
    return axios.get("https://itunes.apple.com/search?"+params);
}