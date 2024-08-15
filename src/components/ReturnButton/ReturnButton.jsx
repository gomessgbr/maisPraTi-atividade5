import { FaArrowLeft } from "react-icons/fa";
import { ReturnButtonStyled } from "./ReturnButtonStyles";

export function ReturnButton({ handleReturn }) {
  return (
    <ReturnButtonStyled onClick={handleReturn}>
      <FaArrowLeft /> Return
    </ReturnButtonStyled>
  );
}
