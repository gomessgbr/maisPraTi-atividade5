import { useState, useEffect } from 'react';

//Hook para verificar se o usuário está autenticado
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  //Verifica se o usuário está autenticado
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  //Função para logar o usuário
  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuthenticated(true);
  };

  //Função para deslogar o usuário
  const logout = () => {
    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  //Retorna o estado de autenticação, a função de login e a função de logout
  return { isAuthenticated, login, logout };
};