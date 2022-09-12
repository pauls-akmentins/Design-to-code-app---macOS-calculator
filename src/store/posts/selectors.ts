import { RootState } from "../types";

export const selectPostData = (state: RootState) => state.posts.posts;

export const selectPostDataCount = (state: RootState) =>
  state.posts.postsToShow;
