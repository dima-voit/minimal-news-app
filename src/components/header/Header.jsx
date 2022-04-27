import React from "react";
import Logo from "../../logo.svg";
import styles from "./header.module.scss";

export class Header extends React.Component {

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="#">
            <img src={Logo} alt="NewsBox" />
          </a>
        </div>
      </header>
    )
  }
}