import { useEffect, useState } from "react";
import Posts from "./Posts/Posts";
import SinglePost from "./SinglePost/SinglePost";
import { Post } from "./types";

const Blog: React.FC = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);

  const fetchPostsApi = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        const filteredData = data
          .filter(({ title }) => title.length < 30)
          .slice(0, 5);
        setPostsData(filteredData);
      });
  };

  useEffect(() => {
    fetchPostsApi();
  }, []);

  return (
    <Posts>
      {postsData.length > 0
        ? postsData.map((post) => <SinglePost key={post.id} {...post} />)
        : null}
    </Posts>
  );
};

export default Blog;
