import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar1 from "../assets/avatar1.jpg";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";

const UserProfile = () => {
  const [avatar, setAvatar] = useState(avatar1);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");



  return (
    <section>
      <div className="flex flex-col justify-center items-center gap-4 p-24 ">
        <Link
          className="text-center bg-slate-500 p-2 rounded-lg shadow-md shadow-slate-500  inline-block"
          to={`/myposts/asd`}
        >
          My post
        </Link>
        <div>
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-2 border-slate-400 relative">
              <img
                className="w-24 h-24 rounded-full object-cover"
                src={avatar1}
                alt=""
              />
              <form className="absolute bottom-0 right-0" action="">
                <input
                  className="hidden"
                  type="file"
                  name="avatar"
                  id="avatar"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  accept="png, jpg, jpeg"
                />
                <label className="text-2xl cursor-pointer" htmlFor="avatar">
                  <FaEdit />
                </label>
              </form>
            </div>
            <button className="text-2xl absolute bottom-0 right-0">
              <FaCheck />
            </button>
          </div>
          <h1 className="pt-4  font-bold">Bereket Getachew</h1>
          <form className="flex flex-col gap-2 ">
            <p className="text-red-500">This is error emage</p>
            <input
              className="outline-none text-slate-800 p-1"
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="outline-none text-slate-800 p-1"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="outline-none text-slate-800 p-1"
              type="password"
              placeholder="Enter your current password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
            />
            <input
              className="outline-none text-slate-800 p-1"
              type="password"
              placeholder="Enter your new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <input
              className="outline-none text-slate-800 p-1"
              type="password"
              placeholder="Confirm your password"
              value={confirmNewPassword}
              onChange={(e) => setConfirmNewPassword(e.target.value)}
            />

            <button
              className="bg-slate-800 text-white p-2 rounded-sm"
              type="submit"
            >
              Update profile
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default UserProfile;
