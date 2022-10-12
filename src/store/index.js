import { createStore, combineReducers, applyMiddleware } from 'redux'
import LoginReducer from './LoginReducer'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import loginSaga from '../action/loginSaga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(combineReducers({user: LoginReducer}), applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(loginSaga)

export default store