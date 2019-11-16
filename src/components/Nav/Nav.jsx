import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const activeStyles = {
  color: "green",
  width: "20%",
  fontWeight: "700"
};

class Nav extends Component {
  render() {
    return (
      <section className={styles.nav}>
        <ul>
          <li>
            <NavLink to="/" activeClassName={styles.activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/movies" activeClassName={styles.activeLink}>
              Movies
            </NavLink>
          </li>
        </ul>
      </section>
    );
  }
}

export default Nav;
