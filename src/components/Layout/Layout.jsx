import { Outlet, useNavigate } from "react-router-dom";
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

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };



  return (
    <AppContainer>
      <NavigationBar onLogout={logout} isOpen={isOpen} toggleNav={toggleNav} />
      <MainContent>
        <ReturnButton handleReturn={() => {
          navigate("/home");
        }} />
        <Outlet />
      </MainContent>
      <Footer />
    </AppContainer>
  );
}
