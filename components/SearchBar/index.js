import React from 'react';
import styles from './Search.module.css';

const SearchBar = ({...rest}) => {
    return (
        <div className={styles.cryptoSearch}>
            <input className={styles.cryptoSearch_input} {...rest} />
        </div>
    )
}

export default SearchBar
