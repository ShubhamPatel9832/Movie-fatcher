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
    const [movieDetails, setMovieDetails] = useState(null);

    const resultCount = movies.length;

    // if (movieDetails !== null) {
    //     const activeMovieID = movieDetails.imdbID;
    // }

    const activeMovieID = movieDetails?.imdbID; // drived class

    useEffect(
        function () {
            async function fetchMovies() {
                const responce = await fetch(`${API_URL}&s=${query}`);
                const data = await responce.json();
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

        const responce = await fetch(`${API_URL}&i=${imdbID}`);
        const data = await responce.json();
        setMovieDetails(data);
    }

    function handleCloseMovieDetail() {
        setMovieDetails(null);
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
            />
        </div>
    );
}

export default App;
