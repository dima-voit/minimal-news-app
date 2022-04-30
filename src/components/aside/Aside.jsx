import React from "react";
import { Exchange } from "../exchange/Exchange";
import { Weather } from "../weather/Weather";
import styles from "./aside.module.scss";

export class Aside extends React.Component {

  render() {
    return (
      <aside className={styles.aside}>
        <Weather />
        <Exchange />
      </aside>
    )
  }
}
