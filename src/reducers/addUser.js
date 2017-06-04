import {ADD_USER} from '../constants/actionTypes';

const initialState ={
    form:[],
    list:[]
};
export default (state = initialState, { type, payload }) => {
    switch (type) {
        case ADD_USER:
            return {...state, form: payload }
        default:
            return state
    }
}