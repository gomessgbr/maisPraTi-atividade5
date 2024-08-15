import { useState } from "react";
import {
  Button,
  Container,
  Input,
  MovieCard,
  MoviesContainer,
  Title,
} from "./movie-search-styles";
import { useGetMovies } from "./hooks/useGetMovies";

export function MovieSearch() {
  const { movies, searchMovies } = useGetMovies();
  const [query, setQuery] = useState(""); // Define o estado para a consulta de busca

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
      />
      <Button onClick={() => searchMovies(query)}>Search</Button>{" "}
      {/* Botão que chama a função searchMovies quando clicado */}
      <MoviesContainer>
        {movies &&
          movies.map(
            (
              movie // Verifica se há filmes e os mapeia para exibir MovieCard
            ) => (
              <MovieCard key={movie.imdbID}>
                <img src={movie.Poster} alt={`${movie.Title} Poster`} />{" "}
                {/* Exibe o pôster do filme */}
                <h3>{movie.Title}</h3> {/* Exibe o título do filme */}
                <p>{movie.Year}</p> {/* Exibe o ano do filme */}
              </MovieCard>
            )
          )}
      </MoviesContainer>
    </Container>
  );
}
