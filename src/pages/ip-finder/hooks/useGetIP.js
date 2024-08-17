import axios from "axios";
import { useState } from "react";

// Hook para buscar os dados do IP
export const useGetIP = () => {
  const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP

  // Função para buscar os dados do IP, com o IP como parâmetro
  const findIP = async ({ ip }) => {
    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const response = await axios.get(url); // Faz uma requisição GET para a API ipinfo.io
      setIpData(response.data); // Armazena os dados da resposta no estado ipData
    } catch (error) {
      console.error("Error fetching IP address data:", error); // Exibe um erro no console em caso de falha
    }
  };

  return {ipData, findIP };
};