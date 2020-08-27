import * as ActionTypes from './ActionTypes'

export const dishReducer = (state = {isLoading: true, errMsg: null, dishes: []}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_DISHES:
            return {...state, isLoading: false, errorMsg: null, dishes: action.payload}
        case ActionTypes.DISH_LOADING:
            return {...state, isLoading:true, errorMsg: null, dishes: []}
        case ActionTypes.DISH_FAILED:
            return {...state, isLoading:false, errorMsg: action.payload}
        default:
            return state
    }
}