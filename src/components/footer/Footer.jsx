import React from "react";
import styles from "./footer.module.scss";

export class Footer extends React.Component {

  render() {
    return (
      <footer className={styles.footer}>
        2022
        <div className={styles.name}>Dmytro Voit</div>
        <a href="https://github.com/dima-voit" target="_blank">GitHub</a>
      </footer>
    )
  }
}