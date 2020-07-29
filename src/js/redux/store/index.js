import { applyMiddleware, compose, combineReducers } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import exampleReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../../sagas/api-saga';

const initializeSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middlewares
const middleware = [
    ...getDefaultMiddleware(),
//    forbiddenWordsMiddleware,
    initializeSagaMiddleware
]

// AUTH STATE
const authState = {
    token: "",
};

function authReducer(state = authState, action) {
    // DO STUFF
    return state;
}

const rootReducer = {
    auth: authReducer,
    example: exampleReducer
};


const store = configureStore({
    reducer: {
        auth: authReducer,
        example: exampleReducer
    },
    middleware,
});

initializeSagaMiddleware.run(apiSaga);

export default store;