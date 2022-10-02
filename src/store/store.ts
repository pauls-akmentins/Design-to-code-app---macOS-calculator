import { configureStore, Store } from "@reduxjs/toolkit";
import { postsSlice } from "./posts";

export const store: Store<any, any> = configureStore({
  reducer: {
    posts: postsSlice.reducer,
  },
});
