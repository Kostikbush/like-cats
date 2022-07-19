import { combineReducers } from "redux";
import { imageReducer } from "./imageReducer";
import loaderReducer from "./loaderReducer";
export const rootReducer = combineReducers({
    imageReducer,
    loaderReducer,
})


