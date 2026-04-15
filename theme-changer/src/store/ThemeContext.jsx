import { createContext } from "react";

const changeTheme = {
   dark: () => {},
   toggle: () => {}
}

export const ThemeContext = createContext(changeTheme);