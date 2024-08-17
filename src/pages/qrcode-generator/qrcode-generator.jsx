import QRCode from "qrcode.react";
import { Container, Input, QRCodeContainer, Title } from "./qrcode-generator-styles";
import { useState } from "react";

export function QRCodeGenerator() {
  // Usa o hook useState para criar uma variável de estado chamada 'text' e uma função para atualizá-la.
  // 'text' armazena o texto que será codificado no QR Code.
  const [text, setText] = useState("");

  // Retorna o JSX que define o layout e comportamento do componente.
  return (
    <Container>
      {/* Exibe o título do gerador de QR Code */}
      <Title>QR Code Generator</Title>
      {/* Renderiza um campo de input para o usuário inserir o texto que será codificado */}
      <Input
        type="text"
        value={text} // Define o valor do input como o texto do estado.
        onChange={(e) => setText(e.target.value)} // Atualiza o estado 'text' quando o valor do input muda.
        placeholder="Enter text to encode" // Texto exibido quando o campo está vazio.
      />
      {/* Renderiza o QRCode apenas se 'text' não estiver vazio */}
      {text && (
        <QRCodeContainer>
          <QRCode value={text} size={256} />{" "}
          {/* Gera o QR Code com o texto atual e tamanho 256px */}
        </QRCodeContainer>
      )}
    </Container>
  );
}
