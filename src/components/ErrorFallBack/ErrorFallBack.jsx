// Component que será mostrado caso ocorra algum erro no site
//  O erro é capturado pelo erro boundery e renderiza esse component

import { useAuth } from "../../hooks";
import { ErrorFallBackButton, ErrorFallBackContainer, ErrorFallBackSubtitle, ErrorFallBackTitle } from "./ErrorFallBackStyles";

export function ErrorFallBack(){
  const {logout} = useAuth();
  return(
    <ErrorFallBackContainer>
      <ErrorFallBackTitle>
         404 
      </ErrorFallBackTitle>
      <ErrorFallBackSubtitle>
        Desculpa, nossa página está fora do ar, tente acessar mais tarde!
      </ErrorFallBackSubtitle>
      <ErrorFallBackButton onClick={logout} to={'/'}>
        Voltar
      </ErrorFallBackButton>
    </ErrorFallBackContainer>
  )
}