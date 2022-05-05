import React from "react";
import styles from "./footer.module.scss";

const startYear = 2022
const currentYear = new Date().getFullYear()

export class Footer extends React.Component {

  render() {
    return (
      <footer className={styles.footer}>
        <div>
          <small>
            © {startYear === currentYear ? startYear : startYear + "-" + currentYear}
          </small>
        </div>
        <div className={styles.name}>Dmytro Voit</div>
        <a href="https://github.com/dima-voit" target="_blank" rel="noreferrer">GitHub</a>
      </footer>
    )
  }
}