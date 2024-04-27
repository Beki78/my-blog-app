import React from "react";
import { Link } from "react-router-dom";
import PostAuthor from "./PostAuthor";

const Postitem = ({ postID, category, thumbnail, title, desc, authorID }) => {
    const shortDescription = desc.length > 150 ? desc.substring(0, 150) + "..." : desc;
    const postTitle = title.length > 30 ? title.substring(0, 30) + "..." : title;


  return (
    <div>
      <article className="border-solid border-2 border-gray-400 rounded-lg bg-slate-400 p-2 shadow-md shadow-slate-700">
        <img className="" src={thumbnail} alt={title} />
        <Link to={`/posts/${postID}`}>
          <h3 className="font-bold text-xl">{postTitle}</h3>
        </Link>
        <p className="pt-4">{shortDescription}</p>
        <div className="">
          <PostAuthor />
          <Link
            className="bg-slate-500 m-4 hover:bg-slate-600 rounded  p-1"
            to={`/posts/categories/${category}`}
          >
            {category}
          </Link>
        </div>
      </article>
    </div>
  );
};

export default Postitem;
