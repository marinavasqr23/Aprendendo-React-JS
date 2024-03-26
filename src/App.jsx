import { LightTheme } from "./shared/themes/light";
import { ThemeProvider } from "@emotion/react";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
export const App = () =>{
  return(

    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes/>
      </BrowserRouter>
    </ThemeProvider>
    
  );
}