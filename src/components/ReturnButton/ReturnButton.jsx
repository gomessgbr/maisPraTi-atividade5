import { FaArrowLeft } from "react-icons/fa";
import { ReturnButtonStyled } from "./ReturnButtonStyles";

//Componte de botão de retorno, suas props são, função que voltar para a tela anterior e qual é a tela atual, respectivamente
export function ReturnButton({ handleReturn, path }) {
  // Caso esteja na tela de home não aparece o botão de voltar
  if (path.includes("/home")) return;
  return (
    <ReturnButtonStyled onClick={handleReturn}>
      <FaArrowLeft /> Return
    </ReturnButtonStyled>
  );
}
