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
import { ErrorLabel } from "../../components";

export function MovieSearch() {
  const { movies, searchMovies, errors, hideErrors } = useGetMovies();
  const [query, setQuery] = useState(""); // Define o estado para a consulta de busca

  return (
    <Container>
      <Title>Movie Search Engine</Title>
      <Input
        type="text"
        value={query} // Valor do campo de entrada é ligado ao estado query
        onChange={(e) => setQuery(e.target.value)} // Atualiza o estado query conforme o usuário digita
        placeholder="Search for a movie" // Placeholder do campo de entrada
        onFocus={hideErrors}
      />
      <Button onClick={() => searchMovies(query)}>Search</Button>{" "}
      {/* Botão que chama a função searchMovies quando clicado */}
      <MoviesContainer>
        {movies &&
          movies.map(
            (
              movie // Verifica se há filmes e os mapeia para exibir MovieCard
            ) => (
              <MovieCard key={movie.id}>
                <img src={movie.posterUrl} alt={`${movie.Title} Poster`} />{" "}
                {/* Exibe o pôster do filme */}
                <h3>{movie.title}</h3> {/* Exibe o título do filme */}
                <p>{movie.release_date}</p> {/* Exibe o ano do filme */}
              </MovieCard>
            )
          )}
      </MoviesContainer>
      <ErrorLabel show={errors.show} message={errors.message} />
    </Container>
  );
}
