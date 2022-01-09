import { combineReducers } from "redux";
import NowCategoryReducer from "./nowCategoryReducer";

const RootReducer = combineReducers({
    NowCategoryReducer,
});

export default RootReducer;
