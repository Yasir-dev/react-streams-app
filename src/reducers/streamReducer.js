import {CREATE, UPDATE, DELETE, FETCH_ONE, FETCH_LIST} from "../actions/types";
import _ from 'lodash';

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_ONE:
            //Add new record in state using key interpolation
            return {...state, [action.payload.id]: action.payload};
        case CREATE:
            return {...state, [action.payload.id]: action.payload};
        case UPDATE:
            return {...state, [action.payload.id]: action.payload};
        case FETCH_LIST:
            return {...state, ..._.mapKeys(action.payload, 'id')};
        case DELETE:
            return _.omit(state, action.payload);
        default:
            return state;
    }
}