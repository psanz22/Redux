import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("");

  const options = ["Español", "English"];

  return (
    <div className="relative w-64">
      <input
        type="text"
        readOnly
        value={selected}
        onClick={() => setOpen(!open)}
        className="w-full border border-gray-300 bg-rose-300 text-purple-900 rounded px-4 py-2 cursor-pointer font-mono"
        placeholder="Español"
      />

      {open && (
        <ul className="absolute top-full left-0 w-full  rounded bg-pink-200 mt-1 z-10">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => {
                setSelected(option);
                setOpen(false);
              }}
              className="px-4 py-2 hover:bg-rose-400 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
