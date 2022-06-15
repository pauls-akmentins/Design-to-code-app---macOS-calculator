import { useEffect, useState } from "react";
import SinglePost from "./SinglePost/SinglePost";
import { Post } from "./types";

const ApiPosts: React.FC = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);

  const fetchPostsApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPostsData(data.slice(0, 10)));
  };

  useEffect(() => {
    fetchPostsApi();
  }, []);

  return (
    <>
      {postsData.length > 0
        ? postsData.map((post) => <SinglePost key={post.id} {...post} />)
        : null}
    </>
  );
};

export default ApiPosts;
