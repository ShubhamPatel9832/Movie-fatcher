import styles from "../styles/MovieDetails.module.css";
import Emoji from "./Emoji";
import StarRating from "./StarRating";

// function MovieDetails({ movie }) {
function MovieDetails({
    movieDetails,
    handleCloseMovieDetail,
    handleAddMovieToWatchList,
}) {
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

    function handleAction(userAction) {
        handleAddMovieToWatchList(movieDetails, userAction);
    }

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
            <StarRating
                color="#fa5252"
                defaultRating={0}
                size={10}
                action={handleAction}
            />

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
