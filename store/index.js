import { createStore, combineReducers } from 'redux'
import { reducer as form } from 'redux-form'

const reducer = combineReducers({ form })
const store = createStore(reducer)

export default store
