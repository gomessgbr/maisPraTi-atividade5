// Importa hooks e componentes do React e bibliotecas externas.
import { useState } from "react";

import { Footer } from "./components";

import { AppContainer, MainContent } from "./styles";
import { useAuth } from "./hooks";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { AppRoutes } from "./routes";
import { AuthProvider } from "./contexts/auth/AuthContext";
import { Login } from "./pages";

// Define o componente principal do aplicativo.
export const App = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isAuthenticated, login, logout } = useAuth();

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <AuthProvider>
      <AppContainer>
        {isAuthenticated ? (
          <>
            <NavigationBar
              isOpen={isAuthenticated}
              onLogout={logout}
              toggleNav={toggleNav}
            />
            <MainContent>
              <AppRoutes />
            </MainContent>
            <Footer />
          </>
        ) : (
          <>
            <MainContent>
              <Login onLogin={login} />
            </MainContent>
          </>
        )}
      </AppContainer>
    </AuthProvider>
  );
};
