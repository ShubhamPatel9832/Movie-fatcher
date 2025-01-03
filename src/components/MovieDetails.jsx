import styles from "../styles/MovieDetails.module.css";
import Emoji from "./Emoji";

const movie = {
    title: "Spider-Man: No Way Home",
    poster: "https://m.media-amazon.com/images/M/MV5BMmFiZGZjMmEtMTA0Ni00MzA2LTljMTYtZGI2MGJmZWYzZTQ2XkEyXkFqcGc@._V1_SX300.jpg",
    runtime: "148 min",
    imdbRating: "8.2",
    plot: "With Spider-Man's identity now revealed, Peter asks Doctor Strange for help. When a spell goes wrong, dangerous foes from other worlds start to appear.",
    released: "17 Dec 2021",
    actors: "Tom Holland, Zendaya, Benedict Cumberbatch",
    director: "Jon Watts",
    genre: "Action, Adventure, Fantasy",
};

// function MovieDetails({ movie }) {
function MovieDetails({ movieDetails }) {
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
