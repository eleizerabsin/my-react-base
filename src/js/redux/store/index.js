import { compose } from "redux";
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import exampleReducer from "../reducers/index";
import { forbiddenWordsMiddleware } from "../middleware";
import createSagaMiddleware from 'redux-saga';
import apiSaga from '../../sagas/api-saga';
import { throttle } from "lodash";

const initializeSagaMiddleware = createSagaMiddleware();
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// middlewares
const middleware = [
    ...getDefaultMiddleware(),
    forbiddenWordsMiddleware,
    //initializeSagaMiddleware
]

// AUTH STATE
const authState = {
    token: "",
};

function authReducer(state = authState, action) {
    // DO STUFF
    return state;
}

export const loadState = () => {
    try {
      const serializedState = localStorage.getItem('state');
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
};

export const saveState = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem('state', serializedState);
    } catch {
      // ignore write errors
    }
};

const preloadedState = loadState();

const store = configureStore({
    reducer: {
        auth: authReducer,
        example: exampleReducer
    },
    middleware,
    preloadedState
});

store.subscribe(throttle(() => {
    saveState({
      auth: store.getState().auth,
      example: store.getState().example
    });
}, 1000));

//initializeSagaMiddleware.run(apiSaga);

export default store;