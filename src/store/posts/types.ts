import { PostValues } from "../../components/Apps/Blog/types";

export interface PostsSlice {
  posts: PostValues[];
  postsToShow: number;
}
