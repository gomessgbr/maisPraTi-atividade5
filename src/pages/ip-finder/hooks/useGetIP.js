import { useState } from "react";
import { makeRequest } from "../../../service/api/httpRequestProvider";

// Hook para buscar os dados do IP
export const useGetIP = () => {
  const [ipData, setIpData] = useState(null); // Define o estado para armazenar os dados do IP
  const [errors, setErrors] = useState({
    show: false,
    message: "",
  });

  // Função para buscar os dados do IP, com o IP como parâmetro
  const findIP = async (ip) => {
    try {
      const url = `https://ipinfo.io/${ip}/json`;
      const data = await makeRequest("get", url); // Faz uma requisição GET para a API ipinfo.io
      setIpData(data); // Armazena os dados da resposta no estado ipData
    } catch (error) {
      onError();
    }
  };
  // Função que é chamada quando a request der error
  const onError = () => {
    setErrors({ show: true, message: "IP não encontrado!" });
  };
  //Função que esconde a messagem de error
  const hideErrors = () => {
    setErrors({ ...errors, show: false });
  };

  return { ipData, findIP, errors, hideErrors };
};
