import Dropdown from "./Dropdown";

export default function Language() {
  return (
    <div className="font-mono max-w-md gradient-to-r mt-10 p-6 md:p-3 flex flex-col gap-6 rounded-3xl shadow-lime-950 shadow-2xl  bg-lime-200 ">
      <h2 className="text-4xl font-bold text-purple-900">Language</h2>
      <p className="text-purple-400">
        Choose your preferred language for the interface system
      </p>
      <legend className="text-purple-800">Select a language...</legend>
      <Dropdown />
    </div>
  );
}
