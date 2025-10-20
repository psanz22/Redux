import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  username: string;
  mail: string;
}

const initialState: UserState = {
  name: "",
  username: "",
  mail: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
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
        return action.payload;
  },
},
});

export const { setUser, setName, setUsername, setMail } = userSlice.actions;
export default userSlice.reducer;
