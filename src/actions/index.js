import streamsApi from '../apis/streams'
import history from '../history';
import {
    SIGN_IN,
    SIGN_OUT,
    CREATE,
    UPDATE,
    DELETE,
    FETCH_ONE,
    FETCH_LIST
} from "./types";

export const signIn = (userId) => {
    return {type: SIGN_IN, payload: userId};
};

export const signOut = () => {
    return {type: SIGN_OUT};
};

export const create = formValues => async (dispatch, getState) => {
    const {userId} = getState().auth;
    const response = await streamsApi.post('/streams', {...formValues, userId});
    dispatch({type: CREATE, payload: response.data});
    history.push('/');
};

export const fetchList = () => async dispatch => {
    const response = await streamsApi.get('/streams');
    dispatch({type: FETCH_LIST, payload: response.data});
};

export const fetchOne = (id) => async dispatch => {
    const response = await streamsApi.get(`/streams/${id}`);
    dispatch({type: FETCH_ONE, payload: response.data});
};

export const update = (id, formValues) => async dispatch => {
    const response = await streamsApi.patch(`/streams/${id}`, formValues);
    dispatch({type: UPDATE, payload: response.data});
    history.push('/');
};

export const remove = (id) => async dispatch => {
    await streamsApi.delete(`/streams/${id}`);
    dispatch({type: DELETE, payload: id});
    history.push('/');
};