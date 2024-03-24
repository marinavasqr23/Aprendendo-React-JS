import { ColorTheme } from "./shared/themes/color";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
export const App = () =>{
  return(

    <ThemeProvider theme={ColorTheme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}