import { combineReducers } from 'redux'
import productReducer from './productReducer'
import orderReducer from './orderReducer'

const reducers = combineReducers({
    productReducer,
    orderReducer
})

export default reducers