import React, { useEffect } from "react";
import QuoraBox from "./QuoraBox";
import Post from "./Post";
import { useAPI } from "./Hooks/useAPI";
import "../Component/Style/feed.css";

const Feed = () => {
  const { data, get } = useAPI();
  console.log(data);
  useEffect(() => {
    get("/quora/post");
  }, []);
  return (
    <div>
      <QuoraBox />
      <div className="postContainer">
        {data?.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
