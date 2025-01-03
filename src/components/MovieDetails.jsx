import styles from "../styles/MovieDetails.module.css";
import Emoji from "./Emoji";

// function MovieDetails({ movie }) {
function MovieDetails({ movieDetails, handleCloseMovieDetail }) {
    const {
        Title,
        Poster,
        Runtime,
        imdbRating,
        Plot,
        Released,
        Actors,
        Director,
        Genre: genre,
    } = movieDetails;

    return (
        <div className={styles.movieDetails}>
            <button
                onClick={handleCloseMovieDetail}
                className={styles.closeMovie}
            >
                <Emoji txt="❌" />
            </button>
            <div className={styles.details}>
                <img
                    src={
                        Poster === "N/A"
                            ? "https://stuartanddunn.officechoice.com.au/Images/ProductImages/product-image-1.png"
                            : Poster
                    }
                    alt={Title}
                />
                <div>
                    <h3>{Title}</h3>
                    <p>
                        {Released} • {Runtime} {genre}
                    </p>
                    <p>
                        <Emoji txt="🍅" /> {imdbRating} Tomatos
                    </p>
                </div>
            </div>

            <div className={styles.description}>
                <p>
                    <strong>PLOT : </strong>
                    {Plot}
                </p>
                <p>
                    <strong>Starring by : </strong>
                    {Actors}
                </p>
                <p>
                    <strong>Directed by : </strong>
                    {Director}
                </p>
            </div>
        </div>
    );
}

export default MovieDetails;
