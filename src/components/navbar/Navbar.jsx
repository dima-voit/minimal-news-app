import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./navbar.module.scss";

export class Navbar extends React.Component {

  render () {
    return (
      <ul className={styles.nav}>
        <li className={styles.nav__item}>
          <NavLink to="/">
            Home
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink to="/pageone">
            Pageone
          </NavLink>
        </li>
      </ul>
    )
  }
}