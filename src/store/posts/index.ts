import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { PostValues } from "../../components/Blog/types";
import { PostsSlice } from "./types";

const initialState: PostsSlice = {
  posts: [],
  postsToShow: 3,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    replacePosts: (state, action) => {
      state.posts = action.payload;
    },
    increaseVisiblePosts: (state) => {
      state.postsToShow += 3;
    },
  },
});

export const { replacePosts } = postsSlice.actions;

export const saveCartData = (posts: PostValues[]) => {
  return (dispatch) => {
    return axios
      .put(
        "https://blog-app-34aa2-default-rtdb.europe-west1.firebasedatabase.app/posts.json",
        posts
      )
      .then(() => {
        dispatch(replacePosts(posts));
      })
      .catch((error) => {
        alert(`ERROR: ${error}`);
      });
  };
};

export const fetchCartData = () => {
  return (dispatch) => {
    return axios
      .get(
        "https://blog-app-34aa2-default-rtdb.europe-west1.firebasedatabase.app/posts.json"
      )
      .then((response) => {
        const data = response.data || [];
        dispatch(replacePosts(data));
      })
      .catch((error) => {
        alert(`ERROR: ${error}`);
      });
  };
};
