import { createSlice } from "@reduxjs/toolkit";

export const commentsSlice = createSlice({
  name: "comments",
  initialState: {
    postId: "",
    author: "",
    body: "",
  },
  reducers: {
    addComment: (state, action) => {
      state.body = action.payload.body;
      state.postId = action.payload.postId;
      state.author = action.payload.author;
    },
  },
});
