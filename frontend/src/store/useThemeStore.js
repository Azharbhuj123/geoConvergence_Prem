import { create } from "zustand";

const getInitialTheme = () => {
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

export const useThemeStore = create((set, get) => ({
  theme: getInitialTheme(),

  toggleTheme: () => {
    const nextTheme = get().theme === "light" ? "dark" : "light";

    localStorage.setItem("theme", nextTheme);

    set({
      theme: nextTheme,
    });
  },

  setTheme: (theme) => {
    localStorage.setItem("theme", theme);

    set({
      theme,
    });
  },
}));