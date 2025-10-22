import { useAppSelector } from "@/lib/hooks";

export default function UserInfo() {
  const user = useAppSelector((state) => state.user);

  return (
    <div className="max-w-md flex h-90 md:h-100  md:max-w-full justify-center items-center  bg-lime-400 bg-gradient-to-r from-purple-500 via-pink-500 mt-10  rounded-b-xs shadow-lg ">
      <div className=" w-3/4 h-3/4 md:w-sm  md:rounded-bl-4xl flex flex-col justify-start items-left gap-4 rounded-3xl max-w-md mx-autoshadow-md  bg-fuchsia-700 p-10  ">
        <h2 className=" text-4xl font-bold text-lime-200 text-center font-mono">
          User Info
        </h2>

        <div className="flex justify-between text-rose-200 font-mono">
          <h2 className="font-mono">Member since</h2>
          <p>{user.memberSince}</p>
        </div>
        <div className="flex justify-between text-lime-200 font-mono ">
          <h2>People murdered:</h2>
          <p>{user.murders}</p>
        </div>
        <div className="flex justify-between text-rose-200 ">
          <h2 className="font-mono">Craziness:</h2>
          <p className="font-mono">{user.craziness}%</p>
        </div>
      </div>
    </div>
  );
}
