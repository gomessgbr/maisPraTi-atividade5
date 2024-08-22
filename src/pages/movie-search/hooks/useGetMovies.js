// import axios from "axios";
import { useState } from "react";
import { makeRequest } from "../../../service/api/httpRequestProvider";

// Hook para buscar filmes
export function useGetMovies() {
  const [movies, setMovies] = useState([]); // Define o estado para armazenar os filmes
  const [errors, setErrors] = useState({ show: false, message: "" });

  // Função para buscar filmes
  const searchMovies = async (query) => {
    try {
      const url = `https://api.themoviedb.org/3/search/movie?query=${query}&api_key=140606622f4c3ba1ee78f626ae9d4b16`;
      const data = await makeRequest("get", url);

      // Base URL para as imagens do TMDb
      const baseUrl = "https://image.tmdb.org/t/p/";
      const imageSize = "w300"; // Você pode ajustar o tamanho conforme necessário

      // Mapeia os resultados para incluir a URL completa da imagem
      const moviesWithImages = data.results.map((movie) => ({
        ...movie,
        posterUrl: movie.poster_path
          ? `${baseUrl}${imageSize}${movie.poster_path}`
          : null,
        backdropUrl: movie.backdrop_path
          ? `${baseUrl}${imageSize}${movie.backdrop_path}`
          : null,
      }));

      setMovies(moviesWithImages); // Armazena os dados dos filmes, incluindo as URLs das imagens
    } catch (error) {
      onError(); // Exibe um erro na tela para usuário
    }
  };

  const onError = () => {
    setErrors({ show: true, message: "Não foi achado nenhum filme" });
  };

  const hideErrors = () => {
    setErrors({ show: false, message: "" });
  };

  return { movies, searchMovies, hideErrors, errors };
}
