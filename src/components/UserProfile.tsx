"use client";

import Image from "next/image";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import { setUser } from "@/store/userSlice";

export default function UserProfile() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);
  console.log("UserProfile user:", user);

  const [name, setNameLocal] = useState(user.name);
  const [username, setUsernameLocal] = useState(user.username);
  const [mail, setMailLocal] = useState(user.mail);

  const handleClick = () => {
    dispatch(setUser({ name, username, mail }));
  };

  return (
    <div className="flex flex-col justify-start items-left gap-4 max-w-md mx-autoshadow-md rounded-md bg-fuchsia-400 ">
      <h2 className="text-2xl font-bold text-purple-900">User Profile</h2>
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto flex items-center justify-center">
        <Image
          src="/jinx.jpeg"
          alt="jinx image"
          width={200}
          height={200}
          className="w-full h-full object-cover block"
        />
      </div>

      <legend className="text-purple-900">Name</legend>
      <input
        type="text"
        value={name}
        onChange={(e) => setNameLocal(e.target.value)}
        className="bg-lime-200 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:text-purple-700"
      />
      <legend className="text-purple-900">Username</legend>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsernameLocal(e.target.value)}
        className="bg-lime-300 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:text-purple-700"
      />
      <legend className="text-purple-900">Mail</legend>
      <input
        type="text"
        value={mail}
        onChange={(e) => setMailLocal(e.target.value)}
        className="bg-lime-400 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500   hover:text-purple-700"
      />
      <button
        onClick={handleClick}
        className="hover:bg-purple-500 bg bg-lime-500 border rounded-2xl border-pink-700 text-pink-700 hover:text-white text-2xl font-bold transition-colors w-60 h-20"
      >
        Save Changes
      </button>
    </div>
  );
}
