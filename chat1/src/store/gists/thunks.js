import {
    getGistsStart, 
    getGistsSuccess, 
    getGistsError,     
    searchtGistsStart, 
    searchGistsSuccess, 
    searchGistsError,
} from "./actions"

export const getGists = (page) => async (dispatch, getState, api) => {
    try {
        dispatch(getGistsStart())

        const {data} = await api.getPublicGistsApi(page)
        console.log("data", data);
        dispatch(getGistsSuccess(data))
    } catch (e) {
        dispatch(getGistsError(e))
    }
};

export const searchGists = (name) => async (dispatch, getState, api) => {
    try {
        dispatch(searchtGistsStart())

        const {data} = await api.serchGistByNameApi(name)
        console.log("data", data);
        dispatch(searchGistsSuccess(data))
    } catch (e) {
        dispatch(searchGistsError(e))
    }
};
