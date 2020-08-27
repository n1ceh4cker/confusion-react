import { createStore, combineReducers, applyMiddleware } from 'redux'
import { dishReducer } from './dishes'
import { commentReducer } from './comments'
import { promotionReducer }from './promotions'
import { leaderReducer } from './leaders'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import { createForms } from 'react-redux-form'
import { InitialFeedback } from './forms'

export const ConfigureStore = () =>{
    const store = createStore(
        combineReducers({
            dishes: dishReducer,
            comments: commentReducer,
            promotions: promotionReducer,
            leaders: leaderReducer,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    )
    return store
}