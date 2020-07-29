import { createReducer, createAction, createSlice } from "@reduxjs/toolkit";
//import { ADD_ARTICLE, DATA_LOADED, FOUND_BAD_WORD, API_ERRORED, DATA_REQUESTED } from "../constants/action-types";
//import { addArticle, foundBadWord, dataLoaded, apiErrored} from "../actions/index";
//import { initial } from "lodash";

const initialState = {
    articles: [],
    remoteArticles: [],
    apiError: ""
};

// const exampleReducer = createReducer(initialState, {
//     [addArticle]: (state, action) => {
//         //return { ...state, articles: state.articles.concat(action.payload) };
//         state.articles = state.articles.concat(action.payload);
//     },
//     [foundBadWord]: (state, action) => {
//         //return { ...state, articles: state.articles.concat(action.payload) };
//         state.articles = state.articles.concat(action.payload);
//     },
//     [dataLoaded]: (state, action) => {
//         //return { ...state, remoteArticles: action.payload };
//         state.remoteArticles = state.remoteArticles.concat(action.payload);
//     },
//     [apiErrored]: (state, action) => {
//         //return { ...state, apiError: action.payload };
//         state.apiError = action.payload;
//     },
// });

const exampleSlice = createSlice({
    name: "example",
    initialState: initialState,
    reducers: {
        addArticle: (state, action) => {
            //return { ...state, articles: state.articles.concat(action.payload) };
            console.log("action.payload", action.payload);
            state.articles = state.articles.concat(action.payload);
        },
        foundBadWord: (state, action) => {
            //return { ...state, articles: state.articles.concat(action.payload) };
            state.articles = state.articles.concat(action.payload);
        },
        dataLoaded: (state, action) => {
            //return { ...state, remoteArticles: action.payload };
            state.remoteArticles = state.remoteArticles.concat(action.payload);
        },
        apiErrored: (state, action) => {
            //return { ...state, apiError: action.payload };
            state.apiError = action.payload;
        },
    }
});

export const { addArticle, foundBadWord, dataLoaded, apiErrored } = exampleSlice.actions;
export default exampleSlice.reducer;