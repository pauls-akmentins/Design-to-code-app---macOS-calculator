import { PostValues } from "../../components/Blog/types";

export interface PostsSlice {
  posts: PostValues[];
  postsToShow: number;
}
