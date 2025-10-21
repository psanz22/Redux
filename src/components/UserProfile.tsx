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

  // aquí utilizamos el usestate local para manejar los valores temporales de los inputs, pero una vez que el usuario le da al botón se dispara el dispatch para actualizar el estado global en Redux.
  // básicamente estamos usando usestate local para capturar el valor del input y luego dispatch para persisitrlo en el estado global.
  const handleClick = () => {
    dispatch(setUser({ name, username, mail }));
  };

  // ¿CUÁNDO UTILIZAMOS DISPATCH Y CUÁNDO USESTATE LOCAL?
  // useState local se utiliza cuando el estado solo importa en este componente. por ejemplo, un input controlado temporal, animaciones, mostrar/ocultar modal...
  // no lo necesitas en Redux si nadie más va a necesitar ese valor. Es rápido y simple.
  // dispatch se utiliza cuando el estado debe ser global, compartido entre múltiples componentes, o persistido. Por ejemplo, datos de usuario, configuración de la app, carrito de compras...
  // Redux es más complejo pero necesario para estados que afectan a toda la app.

  return (
    <div className=" flex flex-col justify-start items-left gap-4 max-w-md mx-autoshadow-md rounded-b-3xl bg-fuchsia-400 p-10 md:p-4 ">
      <h2 className="text-5xl font-bold text-lime-200 text-center font-mono md:text-3xl ">
        User Profile
      </h2>
      <div className="w-40 h-40 rounded-full overflow-hidden mx-auto flex items-center justify-center">
        <Image
          src="/jinx.jpeg"
          alt="jinx image"
          width={200}
          height={200}
          className="w-full h-full object-cover block"
        />
      </div>

      <legend className="text-purple-900 font-mono">Name</legend>
      <input
        type="text"
        value={name}
        // capturamos temporalmente el valor del input en el estado local
        onChange={(e) => setNameLocal(e.target.value)}
        className="bg-lime-200 font-mono px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:text-purple-700"
      />
      <legend className="text-purple-900 font-mono">Username</legend>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsernameLocal(e.target.value)}
        className="bg-lime-300 font-mono px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 hover:text-purple-700"
      />
      <legend className="text-purple-900 font-mono">Mail</legend>
      <input
        type="text"
        value={mail}
        onChange={(e) => setMailLocal(e.target.value)}
        className="bg-lime-400 font-mono px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500   hover:text-purple-700"
      />
      <div className="flex justify-center mt-6">
        <button
          onClick={handleClick}
          className=" cursor-pointer font-mono hover:bg-purple-500 bg bg-lime-500 border rounded-2xl border-pink-700 text-pink-700 hover:text-white text-2xl font-bold transition-colors w-60 h-20"
        >
          Save Changes
        </button>
      </div>
    </div>
  );
}
