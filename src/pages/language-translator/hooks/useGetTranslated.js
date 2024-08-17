import axios from "axios";
import { useState } from "react";

// Hook para traduzir texto
export function useGetTranslated() {
  const [translatedText, setTranslatedText] = useState("");// Define o estado para o texto traduzido

  // Função para traduzir o texto
  const translateText = async ({text, sourceLang, targetLang}) => {
    try {
      const response = await axios.get(
        "https://api.mymemory.translated.net/get",
        {
          params: {
            q: text, // Texto a ser traduzido
            langpair: `${sourceLang}|${targetLang}`, // Par de línguas para tradução
          },
        }
      );
      setTranslatedText(response.data.responseData.translatedText); // Armazena o texto traduzido no estado translatedText
    } catch (error) {
      console.error("Error translating text:", error); // Exibe um erro no console em caso de falha
    }
  };

  return { translatedText, translateText };
}