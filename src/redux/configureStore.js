import { createStore, combineReducers, applyMiddleware } from 'redux'
import { dishReducer } from './dishes'
import { commentReducer } from './comments'
import { promotionReducer }from './promotions'
import { leaderReducer } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            promotions: promotionReducer,
            leaders: leaderReducer
        }),
        applyMiddleware(thunk, logger)
    )
    return store
}