import * as ActionTypes from './ActionTypes'
export const commentReducer = (state = {isLoading: true, errMsg: null, comments: []}, action) =>{
    switch(action.type){
        case ActionTypes.ADD_COMMENT:
            let comment = action.payload
            comment.id = state.length
            comment.date = new Date().toISOString()
            return {...state, comments: [...state.comments, comment]}
        case ActionTypes.ADD_COMMENTS:
            return {...state, isLoading: false, errorMsg: null, comments: action.payload}
        case ActionTypes.COMMENTS_LOADING:
            return {...state, isLoading:true, errorMsg: null, comments: []}
        case ActionTypes.COMMENTS_FAILED:
            return {...state, isLoading:false, errorMsg: action.payload}
        default:
            return state
    }
}