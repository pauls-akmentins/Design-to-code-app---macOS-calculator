import { configureStore, Store } from "@reduxjs/toolkit";
import { commentsSlice } from "./comments";
import { postsSlice } from "./posts";

export const store: Store<any, any> = configureStore({
  reducer: {
    comments: commentsSlice.reducer,
    posts: postsSlice.reducer
  },
});
