import { useState } from "react";
import { makeRequest } from "../../../service/api/httpRequestProvider";

// Hook para traduzir texto
export function useGetTranslated() {
  const [translatedText, setTranslatedText] = useState(""); // Define o estado para o texto traduzido
  const [errors, setErrors] = useState({ show: false, message: "" });

  // Função para traduzir o texto
  const translateText = async (text, sourceLang, targetLang) => {
    try {
      const url = `https://api.mymemory.translated.net/get?q=${text}&langpair=${sourceLang}|${targetLang}`;
      const data = await makeRequest("get", url);
      setTranslatedText(data.responseData.translatedText); // Armazena o texto traduzido no estado translatedText
    } catch (error) {
      onError();
    }
  };

  const onError = () => {
    setErrors({ show: true, message: "Erro ao tentar traduzir o texto" });
  };

  const hideErrors = () => {
    setErrors({ show: false, message: "" });
  };

  return { translatedText, translateText, hideErrors, errors };
}
