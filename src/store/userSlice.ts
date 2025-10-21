import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// definimos la forma del estado que vamos a manejar en este slice para que nuestro estado y payloads estén tipados correctamente.
interface UserState {
  name: string;
  username: string;
  mail: string;
}
// Por cada slice que tengas, creas un archivo de Slice similar a este. 1 archivo = 1 slice

// estado inicial del slice
const initialState: UserState = {
  name: "",
  username: "",
  mail: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // los reducers definen las acciones que pueden modificar el estado y cómo lo hacen.
  reducers: {
    setName: (state,action: PayloadAction<string>) => {
        state.name = action.payload;
    },
    setUsername: (state, action: PayloadAction<string>) => {
        state.username = action.payload;
        },
    setMail: (state, action: PayloadAction<string>) => {
        state.mail = action.payload;
    },
    setUser: (state, action: PayloadAction<UserState>) => {
        return action.payload; //aquí devuelves un nuevo estado completo
  },
},
});

export const { setUser, setName, setUsername, setMail } = userSlice.actions;
export default userSlice.reducer;
