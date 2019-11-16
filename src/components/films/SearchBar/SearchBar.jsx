import React from "react";
import styles from "./SearchBar.module.css";
import propTypes from 'prop-types';

const SearchBar = ({ inputValue, onInputChange }) => {
  return (
    <>
      <input
        type="text"
        className={styles.input}
        value={inputValue}
        onChange={onInputChange}
      />
    </>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  inputValue: propTypes.string,
  onInputChange: propTypes.func,
};
