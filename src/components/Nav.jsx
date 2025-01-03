import Logo from "./Logo";
import Search from "./Search";
import TotalResults from "./TotalResults";

import styles from "../styles/Nav.module.css";

function Nav({ handleChangeSearchQuery, query, resultCount }) {
    return (
        <div className={styles.nav}>
            <Logo />
            <Search
                handleChangeSearchQuery={handleChangeSearchQuery}
                query={query}
            />
            <TotalResults resultCount={resultCount} />
        </div>
    );
}

export default Nav;
