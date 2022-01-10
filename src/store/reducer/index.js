import { combineReducers } from "redux";
import NowCategoryReducer from "./nowCategoryReducer";
import LoginReducer from "./loginReducer";

const RootReducer = combineReducers({
    NowCategoryReducer,
    LoginReducer,
});

export default RootReducer;
