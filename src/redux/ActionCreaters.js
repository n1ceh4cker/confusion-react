import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl';

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: { dishId, rating, author, comment }
})

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
})

export const addPromos = (promotions) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promotions
})

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
})

export const commentsLoading = () => ({
    type: ActionTypes.COMMENTS_LOADING
})

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading())
    return fetch(baseUrl + 'dishes')
    .then(response => {
        if(response.ok){
            return response
        } else{
            let error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error
         }
        },
        error =>{
            let errmsg = new Error(error.message)
            throw errmsg
    })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => dispatch(dishesFailed(error.message)))
}

export const fetchComments = () => (dispatch) => {
    dispatch(commentsLoading())
    return fetch(baseUrl + 'comments')
    .then(response => {
        if(response.ok){
            return response
        } else{
            let error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error
         }
        },
        error =>{
            let errmsg = new Error(error.message)
            throw errmsg
    })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)))
}

export const fetchPromos = () => (dispatch) => {
    dispatch(promosLoading())
    return fetch(baseUrl + 'promotions')
    .then(response => {
        if(response.ok){
            return response
        } else{
            let error = new Error('Error ' + response.status + ': ' + response.statusText)
            error.response = response
            throw error
         }
        },
        error =>{
            let errmsg = new Error(error.message)
            throw errmsg
    })
    .then(response => response.json())
    .then(promotions => dispatch(addPromos(promotions)))
    .catch(error => dispatch(promosFailed(error.message)))
}

export const dishesFailed = (errmsg) => ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmsg
})

export const commentsFailed = (errmsg) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmsg
})

export const promosFailed = (errmsg) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmsg
})
