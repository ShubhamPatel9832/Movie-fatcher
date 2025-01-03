import styles from "../styles/Search.module.css";

function Search({ handleChangeSearchQuery, query }) {
    return (
        <form className={styles.search}>
            <input
                type="text"
                onChange={handleChangeSearchQuery}
                value={query}
            />
            <button>Search</button>
        </form>
    );
}

export default Search;
