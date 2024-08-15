import { FaArrowLeft } from "react-icons/fa";
import { ReturnButtonStyled } from "./ReturnButtonStyles";

export function ReturnButton({ handleReturn, path }) {
  return (
    <ReturnButtonStyled onClick={handleReturn}>
      <FaArrowLeft /> {path === "/home" ? "Return" : "Home"}
    </ReturnButtonStyled>
  );
}
