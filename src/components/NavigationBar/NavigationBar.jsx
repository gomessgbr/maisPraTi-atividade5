import {
  FaBars,
  FaGlobeAmericas,
  FaNetworkWired,
  FaQrcode,
  FaRegQuestionCircle,
  FaSearch,
  FaTasks,
} from "react-icons/fa";
import { NavBar, NavBarToggle, StyledLink } from "./NavigationBarStyles";
import { useAuth } from "../../hooks";

export default function NavigationBar() {

    const { isAuthenticated, logout } = useAuth();
  return (
    <>
      <NavBarToggle>
        <FaBars size={24} color="#2C3E50" />
      </NavBarToggle>

      {isAuthenticated && (
        <NavBar>
          <StyledLink>
            <FaQrcode />
            QR Code Generator
          </StyledLink>
          <StyledLink>
            <FaNetworkWired />
            IP Address Finder
          </StyledLink>
          <StyledLink>
            <FaSearch />
            Movie Search
          </StyledLink>
          <StyledLink>
            <FaTasks />
            Todo App
          </StyledLink>
          <StyledLink>
            <FaRegQuestionCircle />
            Quiz App
          </StyledLink>
          <StyledLink>
            <FaGlobeAmericas />
            Translator
          </StyledLink>
          <button
            onClick={logout}
            style={{
              marginTop: "20px",
              color: "white",
              backgroundColor: "transparent",
              border: "none",
            }}
          >
            Logout
          </button>
        </NavBar>
      )}
    </>
  );
}
