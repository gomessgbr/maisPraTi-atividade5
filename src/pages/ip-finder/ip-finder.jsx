import { useState } from "react";
import {
  Button,
  Container,
  Input,
  ResultsContainer,
  Title,
} from "./ip-finder-styles";
import { useGetIP } from "./hooks/useGetIP";

// Página de Buscador de Endereço IP
export const IPAddressFinder = () => {
  const { ipData, findIP } = useGetIP(); // Usa o hook useGetIP para buscar os dados do IP
  const [ip, setIp] = useState(""); // Define o estado para o IP digitado pelo usuário

  return (
    <Container>
      <Title>IP Address Finder</Title>
      <Input
        type="text"
        value={ip} // Valor do campo de entrada é ligado ao estado ip
        onChange={(e) => setIp(e.target.value)} // Atualiza o estado ip conforme o usuário digita
        placeholder="Enter IP address" // Placeholder do campo de entrada
      />
      <Button onClick={findIP}>Find IP</Button>{" "}
      {/* Botão que chama a função findIP quando clicado */}
      {ipData && ( // Condicional que exibe os dados do IP se ipData não for null
        <ResultsContainer>
          <p>
            <strong>IP:</strong> {ipData.ip}
          </p>
          <p>
            <strong>Location:</strong> {ipData.city}, {ipData.region},{" "}
            {ipData.country}
          </p>
          <p>
            <strong>ISP:</strong> {ipData.org}
          </p>
        </ResultsContainer>
      )}
    </Container>
  );
};
