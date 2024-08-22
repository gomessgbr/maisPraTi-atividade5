import { useState } from "react";
import {
  Button,
  Container,
  Input,
  Label,
  Select,
  Title,
  TranslatedText,
} from "./language-translator-styles";
import { useGetTranslated } from "./hooks/useGetTranslated";
import { ErrorLabel } from "../../components";

export function LanguageTranslator() {
  const { translatedText, translateText, errors, hideErrors } =
    useGetTranslated();
  const [text, setText] = useState(""); // Define o estado para o texto a ser traduzido
  const [sourceLang, setSourceLang] = useState("en"); // Define o estado para a língua de origem
  const [targetLang, setTargetLang] = useState("es"); // Define o estado para a língua de destino

  return (
    <Container>
      <Title>Language Translator</Title>
      <div>
        <Label>Source Language:</Label>
        <Select
          value={sourceLang}
          onChange={(e) => setSourceLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <div>
        <Label>Target Language:</Label>
        <Select
          value={targetLang}
          onChange={(e) => setTargetLang(e.target.value)}
        >
          <option value="en">English</option>
          <option value="es">Spanish</option>
          <option value="fr">French</option>
          <option value="de">German</option>
          <option value="it">Italian</option>
          <option value="pt">Portuguese</option>
        </Select>
      </div>
      <Input
        type="text"
        value={text} // Valor do campo de entrada é ligado ao estado text
        onChange={(e) => setText(e.target.value)} // Atualiza o estado text conforme o usuário digita
        placeholder="Enter text to translate" // Placeholder do campo de entrada
        onFocus={hideErrors}
      />
      <Button onClick={() => translateText(text, sourceLang, targetLang)}>
        Translate
      </Button>{" "}
      {/* Botão que chama a função translateText quando clicado */}
      {translatedText && <TranslatedText>{translatedText}</TranslatedText>}{" "}
      {/* Condicional que exibe o texto traduzido se translatedText não for vazio */}
      <ErrorLabel show={errors.show} message={errors.message} />
    </Container>
  );
}
