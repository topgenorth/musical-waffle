import {combineReducers} from "redux";
import {OldRangeLogReducer} from "./OldRangeLogReducer";

export const rootReducer = combineReducers({
    oldRangeLog: OldRangeLogReducer
});

export type AppState = ReturnType<typeof rootReducer>;
