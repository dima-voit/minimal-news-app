import React from "react";
import Logo from "../../logo.svg";
import { CurrentDate } from "../date/Date";
import { Navbar } from "../navbar/Navbar";

import styles from "./header.module.scss";

export class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/#">
            <img src={Logo} alt="NewsBox" />
          </a>
        </div>
        <Navbar />
        <CurrentDate />
      </header>
    )
  }
}