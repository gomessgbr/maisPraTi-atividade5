// Importa hooks e componentes do React e bibliotecas externas.

import { router } from "./routes/router";
import { AuthProvider } from "./contexts/auth/AuthContext";
import { RouterProvider } from "react-router-dom";
import "./App.css";

// Define o componente principal do aplicativo.
export const App = () => {
  return (
    <RouterProvider router={router}>
      <AuthProvider />
    </RouterProvider>
  );
};
