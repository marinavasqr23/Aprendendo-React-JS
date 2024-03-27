import { createContext } from "react";

interface IThemeContextData{
    themeName: 'light' | 'dark';
    toggleTheme: () => void;
    
}

const ThemeContext = createContext({} as IThemeContextData);

