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

export default function NavigationBar({ isOpen, onLogout, toggleNav }) {
  return (
    <>
      <NavBarToggle onClick={toggleNav}>
        <FaBars size={24} color="#FFFFFF" /> 
      </NavBarToggle>
      {isOpen && (
        <NavBar
          style={{
            "@media (maxWidth: 768px)": { display: isOpen ? "flex" : "none" },
          }}
        >
          <StyledLink to={"/qr-code-generator"}>
            <FaQrcode />
            QR Code Generator
          </StyledLink>
          <StyledLink to={"/ip-address-finder"}>
            <FaNetworkWired />
            IP Address Finder
          </StyledLink>
          <StyledLink to={"/movie-search"}>
            <FaSearch />
            Movie Search
          </StyledLink>
          <StyledLink to={"/todo-app"}>
            <FaTasks />
            Todo App
          </StyledLink>
          <StyledLink to={"/quiz-app"}>
            <FaRegQuestionCircle />
            Quiz App
          </StyledLink>
          <StyledLink to={"/language-translator"}>
            <FaGlobeAmericas />
            Translator
          </StyledLink>
          <button
            onClick={onLogout}
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
