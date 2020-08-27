import * as ActionTypes from './ActionTypes'

export const promotionReducer = (state = {isLoading: true, errMsg: null, promotions: []}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_PROMOS:
            return {...state, isLoading: false, errorMsg: null, promotions: action.payload}
        case ActionTypes.PROMOS_LOADING:
            return {...state, isLoading:true, errorMsg: null, promotions: []}
        case ActionTypes.PROMOS_FAILED:
            return {...state, isLoading:false, errorMsg: action.payload}
        default:
            return state
    }
}