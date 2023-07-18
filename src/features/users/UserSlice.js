import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: "0", name: "Sultonov Rasul" },
  { id: "1", name: "Sultonov Hojiakbar" },
  { id: "2", name: "Sultonov Saidakbar" },
];

const userSlice = createSlice({
  name: "users",
  initialState,
  redusers: {},
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
