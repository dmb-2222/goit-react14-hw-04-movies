import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

// const activeStyle = {
//   color: "green",
//   width: "20%",
//   fontWeight: "700"
// };
// не могу понять, не работает activeStyle, как только не крутил, оставил лишний код т.к. буду его еще мучать
const Nav = () => (
    <section className={styles.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            exact
            // style={{ color: "green" }}
            activeStyle={{ color: "red" }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/movies"
            exact
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

export default Nav;
