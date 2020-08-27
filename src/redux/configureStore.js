import { createStore, combineReducers } from 'redux'
import { dishReducer } from './dishes'
import { commentReducer } from './comments'
import { promotionReducer }from './promotions'
import { leaderReducer } from './leaders'

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            promotions: promotionReducer,
            leaders: leaderReducer
        })
    )
    return store
}