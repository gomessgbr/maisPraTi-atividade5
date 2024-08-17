import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

//Hook para verificar se o usuário está autenticado
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate(); // Hook para navegação.

  //Verifica se o usuário está autenticado
  useEffect(() => {
    const token = localStorage.getItem("token");
    // Caso exista token vai direto para tela de home, caso não vai para a tela de login
    if (token === null) {
      navigate("/");
      return
    }
    navigate("/home");

    setIsAuthenticated(!!token);
  }, [navigate]);

  //Função para logar o usuário
  const login = (token) => {
    localStorage.setItem("token", token);
    setIsAuthenticated(true);
    navigate("/home");
  };

  //Função para deslogar o usuário
  const logout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/");
  };

  //Retorna o estado de autenticação, a função de login e a função de logout
  return { isAuthenticated, login, logout };
};
