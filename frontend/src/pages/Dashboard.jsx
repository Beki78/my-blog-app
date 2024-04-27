import React, { useState } from "react";
import { dummyPosts } from "../data";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section className="pt-28 mb-20">
      {posts.length ? (
        <div>
          {posts.map((post) => {
            return (
              <article key={post.id}>
                <div className="flex gap-2 items-center p-2 bg-slate-500 ml-56 mr-56  mt-6 rounded-md shadow-md shadow-slate-600 ">
                  <div>
                    <img
                      className="w-12 h-12 rounded-md object-cover"
                      src={post.thumbnail}
                      alt=""
                    />
                  </div>
                  <h5>{post.title}</h5>
                  <div className="flex gap-2 pl-56">
                    <Link className=" bg-slate-500 p-2 rounded-md hover:bg-slate-600" to={`/posts/${post.id}`}>View</Link>
                    <Link className=" bg-slate-500 p-2 rounded-md hover:bg-slate-600" to={`/posts/${post.id}/edit`}>Edit</Link>
                    <Link className=" bg-slate-500 p-2 rounded-md hover:bg-slate-600" to={`/posts/${post.id}/delete`}>Delete</Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      ) : (
        <h2>You have no posts</h2>
      )}
    </section>
  );
};

export default Dashboard;
