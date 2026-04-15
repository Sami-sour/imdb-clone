import {  useEffect, useState } from "react";
import {ThemeContext} from "./ThemeContext"


const ThemeProvider = ({children}) => {

const [dark, setDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
})

 
useEffect(() => {
    localStorage.setItem("theme", dark ? "dark" : "light");
  }, [dark]);

const toggle = () => setDark((prev) => !prev)


    return <ThemeContext.Provider value={{dark, toggle}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeProvider;