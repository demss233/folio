import React from "react";
import Card from "./Card";

type posts = object[];

const Post = ({ posts }: { posts: posts }) => {
  return (
    <>
      <div className="mt-16">
        {posts.map((currentPost, currentIndex) => {
          // console.log(currentPost);
          return <Card params={currentPost} key={currentIndex}></Card>;
        })}
      </div>
    </>
  );
};

export default Post;
