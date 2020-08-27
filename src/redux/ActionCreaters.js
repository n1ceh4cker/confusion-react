import * as ActionTypes from './ActionTypes'
import { DISHES } from '../shared/dishes';

export const addComment = (dishId, rating, author, comment) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: { dishId, rating, author, comment }
})

export const fetchDishes = () => (dispatch) => {
    dispatch(dishesLoading(true))
    setTimeout(() => {
        dispatch(addDishes(DISHES))
    }, 2000);
}

export const dishesLoading = () => ({
    type: ActionTypes.DISH_LOADING
})

export const dishesFailed = (errmsg) => ({
    type: ActionTypes.DISH_FAILED,
    payload: errmsg
})

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
})
