import { BrowserRouter } from "react-router-dom";
import React from "react";
import { AppThemeProvider } from './shared/contexts/ThemeContext.tsx';
import { AppRoutes } from './routes/index';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AppThemeProvider>
  );
}