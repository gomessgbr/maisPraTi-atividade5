import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Footer } from "../Footer/Footer";
import { AppContainer, MainContent } from "./LayoutStyles";
import { ReturnButton } from "../ReturnButton/ReturnButton";
import { useState } from "react";

export function Layout() {
  const { logout } = useAuth();
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };


  const onReturn = () => {
    if (location.pathname === "/home") {
      logout();
    } else {
      navigate("/home");
    }
  };

  return (
    <AppContainer>
      <NavigationBar onLogout={logout} isOpen={isOpen} toggleNav={toggleNav} />
      <MainContent>
        <ReturnButton handleReturn={onReturn} path={location.pathname} />
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
