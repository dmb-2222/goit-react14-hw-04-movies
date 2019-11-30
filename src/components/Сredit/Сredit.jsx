import React, { Component } from "react";
import styles from "./Сredit.module.css";
import { getCredits } from "../../services/ApiMovies";

class Сredit extends Component {
  state = {
    credit: [],
  };
  componentDidMount() {
    getCredits(this.props.match.params.id).then(data =>
      this.setState({ credit: data })
    );
  }
  render() {
    const { credit } = this.state;
    return (
      <div>
        {credit.length !== 0 && (
          <ul className={styles.credit}>
            {credit.cast.map(c => (
              <li key={c.id}>
                <img
                  src={`http://image.tmdb.org/t/p/original/${c.profile_path}`}
                  alt="c.name"
                  style={{ width: "60px", display: "block" }}
                />
                {c.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

export default Сredit;
