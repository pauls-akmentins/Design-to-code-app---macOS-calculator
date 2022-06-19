import { useCallback, useEffect, useState } from "react";
import Posts from "./Posts/Posts";
import SinglePost from "./SinglePost/SinglePost";
import { Post } from "./types";

const Blog: React.FC = () => {
  const [postsData, setPostsData] = useState<Post[]>([]);
  const [showCount, setShowCount] = useState<number>(3);

   const fetchPostsApi = useCallback(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data: Post[]) => {
        const filteredData = data.filter(({ title }) => title.length < 30);
        setPostsData(filteredData);
      });
  }, []);

  useEffect(() => {
    fetchPostsApi();
  }, [fetchPostsApi]);

  return (
    <>
      {postsData.length > 0 ? (
        <>
          <Posts>
            {postsData.slice(0, showCount).map((post) => (
              <SinglePost key={post.id} {...post} />
            ))}
          </Posts>
          <button onClick={() => setShowCount(showCount + 3)}>Show More</button>
        </>
      ) : null}
    </>
  );
};

export default Blog;
