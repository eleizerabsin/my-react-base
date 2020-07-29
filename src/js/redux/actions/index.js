import { createAction } from "@reduxjs/toolkit";
import { ADD_ARTICLE, FOUND_BAD_WORD, DATA_LOADED, API_ERRORED, DATA_REQUESTED } from "../constants/action-types";

const getData = createAction(DATA_REQUESTED);
const addArticle = createAction(ADD_ARTICLE);
const foundBadWord = createAction(FOUND_BAD_WORD);
const dataLoaded = createAction(DATA_LOADED);
const apiErrored = createAction(API_ERRORED);

export {
    addArticle,
    foundBadWord,
    dataLoaded,
    apiErrored,
    getData
}