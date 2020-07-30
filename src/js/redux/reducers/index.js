import { createSlice } from "@reduxjs/toolkit";
import { MSG001_API_ERROR, MSG002_LOADING} from "../../utils/Message";
import { getData } from "../../api/Post";

const initialState = {
    articles: [],
    remoteArticles: [],
    apiError: "",
    loading: ""
};

const exampleSlice = createSlice({
    name: "example",
    initialState: initialState,
    reducers: {
        addArticle: (state, action) => {
            state.articles = state.articles.concat(action.payload);
        },
        foundBadWord: (state, action) => {
            state.articles = state.articles.concat(action.payload);
        },
        dataLoaded: (state, action) => {
            state.remoteArticles = state.remoteArticles.concat(action.payload);
        },
        apiErrored: (state, action) => {
            state.apiError = action.payload;
        },
    },
    extraReducers: {
        [getData.pending]: state => {
            state.loading = MSG002_LOADING;
            state.apiError = "";
            state.remoteArticles = [];
        },
        [getData.rejected]: (state, action) => {
            state.loading = "";
            state.apiError = MSG001_API_ERROR;
            state.remoteArticles = [];
        },
        [getData.fulfilled]: (state, action) => {
            state.loading = "";
            state.apiError = "";
            state.remoteArticles = state.remoteArticles.concat(action.payload);
        }
    }
});

export const { addArticle, foundBadWord, dataLoaded, apiErrored } = exampleSlice.actions;
export default exampleSlice.reducer;