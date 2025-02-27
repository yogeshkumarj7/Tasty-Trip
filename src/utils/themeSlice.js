import { createSlice } from "@reduxjs/toolkit";
const getInitialThemeState = () => {
  const savedTheme = localStorage.getItem("isDarkMode");
  return savedTheme !== null ? savedTheme === "true" : false; 
};

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    isDarkMode: getInitialThemeState(),
  },
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      localStorage.setItem("isDarkMode", state.isDarkMode);
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
      localStorage.setItem("isDarkMode", action.payload);
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;
