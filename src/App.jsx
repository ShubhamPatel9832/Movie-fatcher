import { useState } from "react";
import Main from "./components/Main";
import Nav from "./components/Nav";
import "./global.css";
import { useEffect } from "react";

const KEY = "65ddd0f";
export const API_URL = `http://www.omdbapi.com/?apikey=${KEY}`;

function App() {
    // state
    // drived state
    // effect
    // handlefuntion
    const [query, setQuery] = useState("spider");
    const [movies, setMovies] = useState([]);
    const [watchList, setWatchList] = useState([]);
    const [movieDetails, setMovieDetails] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingMovieDetails, setIsLoadingMovieDetails] = useState(false);

    const resultCount = movies.length;

    const activeMovieID = movieDetails?.imdbID;

    useEffect(
        function () {
            async function fetchMovies() {
                setIsLoading(true);
                setMovies([]);

                const responce = await fetch(`${API_URL}&s=${query}`);
                const data = await responce.json();
                setMovies(data.Search || []);

                setIsLoading(false);
                setMovies(data.Search || []);
            }

            if (query.length >= 3) fetchMovies();
            else {
                setMovies([]);
                setMovieDetails(null);
            }
        },
        [query]
    );

    function handleChangeSearchQuery(e) {
        setQuery(e.target.value);
    }

    async function handleMovieCardClick(imdbID) {
        if (movieDetails?.imdbID === imdbID) {
            // optional channing
            return setMovieDetails(null);
        }

        setIsLoadingMovieDetails(true);
        setMovieDetails(null);

        const responce = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await responce.json();
        setMovieDetails(data);

        setIsLoadingMovieDetails(false);
        setMovieDetails(data);
    }

    function handleCloseMovieDetail() {
        setMovieDetails(null);
    }

    function handleAddMovieToWatchList(movieDeatils, userRating) {
        const watchedMovie = {
            name: movieDeatils.Title,
            poster: movieDeatils.Poster,
            releaseDate: movieDeatils.Released,
            runtime: movieDeatils.Runtime,
            imdbRating: Number(movieDeatils.imdbRating),
            userRating: userRating,
            imdbID: movieDeatils.imdbID,
        };

        const index = watchList.findIndex(function (movie) {
            return movie.imdbID === movieDeatils.imdbID;
        });

        if (index !== -1) {
            watchList[index] = watchedMovie;
            setWatchList(function (watchList) {
                return [...watchList];
            });
        } else {
            setWatchList(function (watchList) {
                return [...watchList, watchedMovie];
            });
        }
    }
    // jsx
    return (
        <div>
            <Nav
                handleChangeSearchQuery={handleChangeSearchQuery}
                query={query}
                resultCount={resultCount}
            />
            <Main
                movies={movies}
                handleMovieCardClick={handleMovieCardClick}
                movieDetails={movieDetails}
                activeMovieID={activeMovieID}
                handleCloseMovieDetail={handleCloseMovieDetail}
                isLoading={isLoading}
                isLoadingMovieDetails={isLoadingMovieDetails}
                handleAddMovieToWatchList={handleAddMovieToWatchList}
                watchList={watchList}
            />
        </div>
    );
}

export default App;
