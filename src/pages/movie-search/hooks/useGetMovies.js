import axios from "axios";
import { useState } from "react";

// Hook para buscar filmes
export function useGetMovies() {
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes

  // Função para buscar filmes
  const searchMovies = async ({query}) => {
    try {
      const response = await axios.get(
        `http://www.omdbapi.com/?s=${query}&apikey=403abbfe`
      ); // Faz uma requisição GET para a API OMDB
      setMovies(response.data.Search); // Armazena os dados dos filmes no estado movies
    } catch (error) {
      console.error("Error fetching movie data:", error); // Exibe um erro no console em caso de falha
    }
  };

  return { movies, searchMovies };
}