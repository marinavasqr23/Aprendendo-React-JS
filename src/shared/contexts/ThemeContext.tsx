import { createContext } from "react";

interface IThemeContextData{
    themeName: 'light' | 'dark';
    
}

const ThemeContext = createContext({});

