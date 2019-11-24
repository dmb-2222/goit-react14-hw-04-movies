import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getFilmById} from "../../services/ApiMovies";
import styles from "./MovieDetailsPage.module.css";
import { Link } from "react-router-dom";
import Credit from "../../components/Сredit/Сredit";
import Reviews from "../../components/Reviews/Reviews";

class MovieDetailsPage extends Component {
  state = {
    movieDetals: []
  };
  componentDidMount() {
    const id = this.props.match.params.id || this.props.location.state.id;
    getFilmById(id).then(data => this.setState({ movieDetals: data }));
  }
  handleGoBack = () => {
    const { state } = this.props.location;
    if (state) {
      this.props.history.push(state.from);
    }
  };

  render() {
    const {
      original_title,
      overview,
      poster_path,
      genres
    } = this.state.movieDetals;
    const { id } = this.props.match.params;
    return (
      this.state.movieDetals.length !== 0 && (
        <>
          <button type="button" onClick={this.handleGoBack}>
            Go back
          </button>
          <div className={styles.movieDetailsPage}>
            <div>
              <img
                src={`http://image.tmdb.org/t/p/original${poster_path}`}
                alt={original_title}
                style={{ width: "200px" }}
              />
            </div>
            <div>
              <h1>{original_title}</h1>
              <h3>Overview</h3>
              <p>{overview}</p>
              <h4>Genres</h4>
              {genres.map(genre => (
                <ul key={genre.id}>
                  <li>{genre.name} </li>
                </ul>
              ))}
            </div>
          </div>
          <h3>Editional information</h3>
          <Link to={`/movies/${id}/cast`}>Cast</Link>
          <Link to={`/movies/${id}/reviews`}>Reviews</Link>
          <Route path={`${this.props.match.path}/cast/`} component={Credit} />
          <Route
            path={`${this.props.match.path}/reviews/`}
            component={Reviews}
          />
        </>
      )
    );
  }
}

export default MovieDetailsPage;
