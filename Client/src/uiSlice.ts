import { createSlice } from "@reduxjs/toolkit";

const getInitialDarkMode = () => {
  const storedDarkMode = localStorage.getItem("darkMode");
  return storedDarkMode ? JSON.parse(storedDarkMode) : true;
};

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    darkMode: getInitialDarkMode(),
    isLoading: false,
  },
  reducers: {
    toggleDarkMode(state) {
      localStorage.setItem("darkMode", JSON.stringify(!state.darkMode));
      state.darkMode = !state.darkMode;
    },
    startLoading(state) {
      state.isLoading = true;
    },
    stopLoading(state) {
      state.isLoading = false;
    },
  },
});

export { uiSlice };
export const { toggleDarkMode, startLoading, stopLoading } = uiSlice.actions;
