import { configureStore, Store, combineReducers } from "@reduxjs/toolkit";
import commentsReducer from "./comments/reducers";
import postsReducer from "./posts/reducers";

const combinedReducers = combineReducers({
  posts: postsReducer,
  comments: commentsReducer,
});

const store: Store<any, any> = configureStore({
  reducer: combinedReducers,
});

export default store;
