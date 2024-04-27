import React, { useState } from "react";
import { Link } from "react-router-dom";
import chrstian from "../assets/chrstian.jpg";
import avatar1 from "../assets/avatar1.jpg";
import avatar2 from "../assets/avatar2.jpg";
import avatar3 from "../assets/avatar3.jpg";

const authorsData = [
  {
    id: 1,
    name: "Bereket Getachew",
    avatar: chrstian,
    posts: 10,
  },
  {
    id: 2,
    name: "Steve Jobs",
    avatar: avatar1,
    posts: 5,
  },
  {
    id: 3,
    name: "Mark Zakerberg",
    avatar: avatar2,
    posts: 3,
  },
  {
    id: 4,
    name: "Elon Musk",
    avatar: avatar3,
    posts: 7,
  },
  {
    id: 5,
    name: "Bereket Getachew",
    avatar: chrstian,
    posts: 10,
  },
  {
    id: 6,
    name: "Steve Jobs",
    avatar: avatar1,
    posts: 5,
  },
  {
    id: 8,
    name: "Elon Musk",
    avatar: avatar3,
    posts: 7,
  },
];

const Authors = () => {
  const [authors, setAuthors] = useState(authorsData);

  return (
    <section>
      {authors.length > 0 ? (
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-20 pt-40 pb-40 ">
            {authors.map(({ id, name, avatar, posts }) => (
              <Link
                className=" p-2  rounded-3xl bg-slate-500 shadow-lg shadow-slate-600 hover:bg-slate-600"
                key={id}
                to={`/posts/users/${id}`}
              >
                <div className="flex gap-4 items-center">
                  <div>
                    <img
                      className="w-12 h-12 rounded-full object-cover"
                      src={avatar}
                      alt={name}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg text-slate-800">{name}</h4>
                    <p className="text-md text-slate-800">{posts} posts</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      ) : (
        <p className="text-center pt-44 pb-44 text-2xl">No authors found</p>
      )}
    </section>
  );
};

export default Authors;
