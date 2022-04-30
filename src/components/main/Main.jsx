import React from "react";
import { Aside } from "../aside/Aside";
import { News } from "../news/News";
import styles from "./main.module.scss";

export class Main extends React.Component {

  render() {
    return (
      <main className={styles.main}>
        <News />
        <Aside />
      </main>
    )
  }
}