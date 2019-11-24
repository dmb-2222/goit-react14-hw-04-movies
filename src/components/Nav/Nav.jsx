import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

// const activeStyles = {
//   color: "green",
//   width: "20%",
//   fontWeight: "700"
// };

const Nav = () => {
  return (
    <section className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            activeStyle={{ color: "red" }}
            style={{ color: "green" }}
            
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            // activeClassName={styles.activeLink}
            // className={styles.test}
            style={{ color: "green" }}
            activeStyle={{ color: "red" }}
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </section>
  );
};

export default Nav;
