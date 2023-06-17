import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import changeCategoryReducer from "./changeCategoryReducer";

const rootReducer = combineReducers({
    categoriesReducer,
    changeCategoryReducer,
})