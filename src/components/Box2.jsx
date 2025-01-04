import styles from "../styles/Box2.module.css";
import MovieDetails from "./MovieDetails";
import Loader from "./Loader";
import WatchSummery from "./WatchSummery";
import WatchMovieList from "./WatchedMovieList";

function Box2({
    movieDetails,
    handleCloseMovieDetail,
    isLoadingMovieDetails,
    handleAddMovieToWatchList,
    watchList,
}) {
    return (
        <div className={styles.box2}>
            {isLoadingMovieDetails && <Loader />}

            {!isLoadingMovieDetails && !movieDetails && (
                <>
                    <WatchSummery />
                    <WatchMovieList watchList={watchList} />
                </>
            )}

            {!isLoadingMovieDetails && movieDetails && (
                <MovieDetails
                    movieDetails={movieDetails}
                    handleCloseMovieDetail={handleCloseMovieDetail}
                    handleAddMovieToWatchList={handleAddMovieToWatchList}
                />
            )}
        </div>
    );
}

export default Box2;
