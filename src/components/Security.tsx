import { Lock } from "lucide-react";

export default function Security() {
  const handleClick = () => {
    console.log("Change password clicked");
  };

  return (
    <div className="border bg-purple-900 text-rose-400 max-w-md mt-10 p-6 md:p-3 flex flex-col gap-6 rounded-3xl shadow-lime-950 shadow-2xl     ">
      <div className="flex gap-4">
        <Lock
          className="w-8 h-8 stroke-rose-500 group-hover:stroke-purple-900 "
          strokeWidth={3}
        />
        <p className="text-4xl font-mono tracking-widest">Security</p>
      </div>
      <p className="font-mono text-rose-500">
        Be careful, keep your secrets safe.
      </p>
      <button
        onClick={handleClick}
        className="cursor-pointer border font-mono hover:bg-rose-500 hover:text-purple-900 tracking-widest"
      >
        Change password
      </button>
    </div>
  );
}
