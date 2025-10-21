"use client";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/lib/hooks";
import { Skull } from "lucide-react";

export default function HomePage() {
  const router = useRouter();

  const user = useAppSelector((state) => state.user);

  const handleClick = () => {
    router.push("/user-portal");
  };

  return (
    <div className=" bg-yellow-500  w-full min-h-screen flex flex-col justify-center items-center gap-10">
      <div className="flex flex-col md:flex-row justify-center items-center gap-6">
        <div className="  text-6xl font-black tracking-widest text-purple-800 mb-8 ">
          Welcome
        </div>
        <div className="  text-6xl font-black tracking-widest text-purple-800 mb-8 ">
          {user.name} {/* accedemos al name del estado global */}
        </div>
      </div>
      <button
        onClick={handleClick}
        className=" text-white cursor-pointer  group h-24 w-24 rounded-full  hover:text-yellow-200 active:bg-purple-700 active:scale-90 transition-all duration-150 flex justify-center items-center text-center font-bold text-lg   "
      >
        <Skull
          className="w-30 h-30 stroke-white group-hover:stroke-purple-900  "
          strokeWidth={2}
        />
      </button>
    </div>
  );
}
