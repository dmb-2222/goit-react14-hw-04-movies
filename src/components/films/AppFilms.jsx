import React  from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieGrid from "./MovieGrid/MovieGrid";
import style from "./AppFilms.module.css";
import movies from "../../movies";

function searchFilms(items, searchValue) {
  return items.filter(item =>
    item.title.toLowerCase().includes(searchValue.toLowerCase())
  );
}

class AppFilms extends React.Component {
  
  state = { searchValue: "" };

  handleInput = e => {
    this.setState({ searchValue: e.target.value });
  };

  render() {
    const { searchValue } = this.state;
    const showFenedFilms = searchFilms(movies, searchValue);
    return (
      <div className={style.containerFilm}>
        <SearchBar inputValue={searchValue} onInputChange={this.handleInput} />
        <MovieGrid items={showFenedFilms} />
      </div>
    );
  }
}
export default AppFilms;
