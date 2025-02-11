// import { createSlice } from "@reduxjs/toolkit";

// const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: false,
//     username: "",
//   },
//   reducers: {
//     login: (state, action) => {
//       state.isLoggedIn = true;
//       state.username = action.payload;
//     },
//     logout: (state) => {
//       state.isLoggedIn = false;
//       state.username = "";
//     },
//   },
// });

// export const { login, logout } = authSlice.actions;
// export default authSlice.reducer;

//.....................
import { createSlice } from "@reduxjs/toolkit";

const loadState = () => {
  try {
    const serializedState = localStorage.getItem("authState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const initialState = loadState() || {
  isLoggedIn: false,
  user: null,
  username: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    LOGIN: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
      state.username = action.payload.username;
      // Save to localStorage
      localStorage.setItem("authState", JSON.stringify(state));
    },
    LOGOUT: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      state.username = null;
      // Clear localStorage
      localStorage.removeItem("authState");
    },
  },
});

export const { LOGIN, LOGOUT } = authSlice.actions;
export default authSlice.reducer;
