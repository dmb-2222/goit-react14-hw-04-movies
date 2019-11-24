import React, { Component } from "react";
import { getReviews } from "../../services/ApiMovies";

class Reviews extends Component {
  state = { reviews: [] };
  componentDidMount() {
    getReviews(this.props.match.params.id).then(data =>
      this.setState({ reviews: data })
    );
  }
  render() {
    const { reviews } = this.state;
    return (
      reviews.length !== 0 &&
      (reviews.results.length !== 0 ? (
        reviews.results.map(result => (
          <div key={result.id}>
            <h3>{result.author}</h3>
            <p>{result.content}</p>
          </div>
        ))
      ) : (
        <h3>No reviews</h3>
      ))
    );
  }
}
export default Reviews;
