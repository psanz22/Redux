"use client";

import UserInfo from "@/components/UserInfo";
import UserProfile from "@/components/UserProfile";
import Security from "@/components/Security";
import Language from "@/components/Language";
import { useRouter } from "next/navigation";
import { Home } from "lucide-react";

export default function UserPortal() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/home");
  };

  return (
    <div className="bg-lime-300  min-h-screen p-10 md:bg-rose-500">
      <div className="flex items-center justify-between  max-w-md  ">
        <h1 className="text-7xl font-bold text-purple-900 font-mono">
          SETTINGS
        </h1>
        <button
          onClick={handleClick}
          className="hover:bg-purple-500 cursor-pointer group bg bg-rose-500 border border-lime-400 text-lime-400  font-bold transition-colors w-16 h-16 flex justify-center items-center"
        >
          <Home
            className="w-8 h-8 stroke-lime-500 group-hover:stroke-purple-900 "
            strokeWidth={3}
          />
        </button>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <UserProfile />
        <div>
          <div className="md:flex md:gap-5">
            <Security />
            <Language />
          </div>
          <UserInfo />
        </div>
      </div>
    </div>
  );
}
