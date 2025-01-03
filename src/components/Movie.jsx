import styles from "../styles/Movie.module.css";

function Movie({ image, name, year, handleMovieCardClick, imdbID, active }) {
    return (
        <div
            onClick={() => handleMovieCardClick(imdbID)} // isme age arrow function nahi dege to direct call ho jayega
            className={`${styles.movie} ${active ? styles.activeMovie : ""}`}

            //  {active && styles.acctiveMovie } ye nahi kar sakthe hai kyki isme ek flase class return kartha hai true hai to sahi hai lekin agr flase hua to wrong ho jayega
        >
            <div className={styles.imageBox}>
                <img
                    src={
                        image === "N/A"
                            ? "https://icrier.org/wp-content/uploads/2022/09/Event-Image-Not-Found.jpg"
                            : image
                    }
                    alt={name}
                />
            </div>
            <div className={styles.detailsBox}>
                <h3>{name}</h3>
                <p>{year}</p>
            </div>
        </div>
    );
}

export default Movie;
