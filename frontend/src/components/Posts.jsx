import React from "react";
import { useState } from "react";
import book from "../assets/book.jpg";
import science from "../assets/science.jpg";
import liabrary from "../assets/liabrary.jpg";
import Postitem from "./Postitem";

const dummyPosts = [
  {
    id: "1",
    thumbnail: book,
    category: "eduacation",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    authorID: "3",
  },
  {
    id: "2",
    thumbnail: science,
    category: "science",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    authorID: "1",
  },
  {
    id: "3",
    thumbnail: liabrary,
    category: "art",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    authorID: "2",
  },
  {
    id: "4",
    thumbnail: book,
    category: "eduacation",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    authorID: "4",
  },
  {
    id: "5",
    thumbnail: science,
    category: "science",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    authorID: "5",
  },
  {
    id: "6",
    thumbnail: liabrary,
    category: "art",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing eli Lorem ipsum dolor sit amet, consectetur adipiscing eli",
    authorID: "6",
  },
];

const Posts = () => {
  const [posts, setPosts] = useState(dummyPosts);
  return (
    <section>
      <div className="grid grid-cols-3 gap-12 mx-auto m-12 ml-12 mr-12 pt-20">
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
    </section>
  );
};

export default Posts;
