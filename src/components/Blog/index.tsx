import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import Button from "@mui/material/Button";

import {
  fetchCartData,
  increaseVisiblePosts,
  saveCartData,
} from "../../store/posts";
import {
  selectPostData,
  selectPostDataCount,
} from "../../store/posts/selectors";
import { RootState } from "../../store/types";

import SinglePost from "./SinglePost/SinglePost";
import styles from "./Blog.module.css";
import PostForm from "./PostForm/PostForm";
import { PostValues } from "./types";
import Posts from "./Posts/Posts";
import { Chip, Stack } from "@mui/material";

const Blog: React.FC = () => {
  const dispatch = useDispatch();
  const [loadingPosts, setLoadingPosts] = useState<boolean>(false);
  const [showPosts, setShowPosts] = useState<boolean>(false);
  const posts = useSelector<RootState, PostValues[]>(selectPostData);
  const showPostsCount = useSelector<RootState, number>(selectPostDataCount);

  useEffect(() => {
    setLoadingPosts(true);
    dispatch<any>(fetchCartData()).finally(() => setLoadingPosts(false));
  }, [dispatch]);

  const handleRemovePost = (post_id: string) => {
    const newPosts = posts.filter((post) => post.post_id !== post_id);

    dispatch<any>(saveCartData(newPosts)).finally(() => {});
  };

  return (
    <div className={classNames(styles.blogContainer)}>
      <div className={classNames(styles.showPostsContainer)}>
        <span className={classNames(styles.postCount)}>
          {loadingPosts ? (
            "Loading posts..."
          ) : (
            <>
              Currently there are <strong>{posts.length}</strong> posts.
            </>
          )}
        </span>
        {posts.length ? (
          <div className={classNames(styles.chipContainer)}>
            <Stack direction="row" spacing={1}>
              <Chip
                label="Form"
                variant="outlined"
                color={!showPosts ? "primary" : "default"}
                onClick={() => setShowPosts(false)}
              />
              <Chip
                label="Posts"
                variant="outlined"
                color={showPosts ? "primary" : "default"}
                onClick={() => setShowPosts(true)}
              />
            </Stack>
          </div>
        ) : null}
      </div>
      {showPosts && posts.length ? (
        <>
          <Posts>
            {posts.slice(0, showPostsCount).map((post) => (
              <SinglePost
                key={post.post_id}
                post_id={post.post_id}
                post_author={post.post_author}
                post_title={post.post_title}
                post_body={post.post_body}
                post_date={post.post_date}
                handleRemovePost={handleRemovePost}
              />
            ))}
          </Posts>
          {showPostsCount < posts.length ? (
            <Button onClick={() => dispatch(increaseVisiblePosts())}>
              Show More
            </Button>
          ) : null}
        </>
      ) : (
        <PostForm posts={posts} />
      )}
    </div>
  );
};

export default Blog;
