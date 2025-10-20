"use client";
import { useRouter } from "next/navigation";

export default function HomePage() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/user-portal");
  };

  return (
    <div className=" bg-yellow-500 w-full min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="  text-6xl font-black tracking-widest text-purple-800 mb-8">
        Welcome, you
      </div>
      <button
        onClick={handleClick}
        className=" text-white border h-24 w-24 rounded-full hover:bg-purple-500 hover:text-yellow-200 active:bg-purple-700 active:scale-90 transition-all duration-150 flex justify-center items-center text-center font-bold text-lg   "
      >
        PRESS
      </button>
    </div>
  );
}
