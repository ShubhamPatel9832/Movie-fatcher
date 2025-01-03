import Movie from "./Movie";
import styles from "../styles/MovieList.module.css";

// const tempMovieData = [
//     {
//         imdbID: "tt1375666",
//         Title: "Inception",
//         Year: "2010",
//         Poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//     },
//     {
//         imdbID: "tt0133093",
//         Title: "The Matrix",
//         Year: "1999",
//         Poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//     },
//     {
//         imdbID: "tt6751668",
//         Title: "Parasite",
//         Year: "2019",
//         Poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//     },
// ];

function MovieList({ movies, handleMovieCardClick, activeMovieID }) {
    return (
        <div className={styles.movieList}>
            {movies.map(function (movie) {
                return (
                    <Movie
                        image={movie.Poster}
                        name={movie.Title}
                        year={movie.Year}
                        key={movie.imdbID}
                        imdbID={movie.imdbID}
                        handleMovieCardClick={handleMovieCardClick}
                        active={movie.imdbID === activeMovieID}
                    />
                );
            })}
        </div>
    );
}

export default MovieList;
