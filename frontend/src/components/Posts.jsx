import React from "react";
import { useState } from "react";
import Postitem from "./Postitem";
import { dummyPosts } from "../data";


const Posts = () => {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className="">
      {posts.length > 0 ? (
        <div className="grid md:grid-cols-3 sm:grid-cols-2  gap-12 mx-auto m-12 ml-12 mr-12 pt-20">
          {posts.map(({ id, thumbnail, category, title, desc, authorID }) => (
            <Postitem
              key={id}
              postID={id}
              thumbnail={thumbnail}
              category={category}
              title={title}
              desc={desc}
              authorID={authorID}
            />
          ))}
        </div>
      ) : (
        <p className="text-center pt-44 pb-44 text-2xl">No posts found</p>
      )}
    </section>
  );
};

export default Posts;
