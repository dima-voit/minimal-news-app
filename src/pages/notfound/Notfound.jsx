import React from "react";
import styles from "./notfound.module.scss";

export class Notfound extends React.Component {

  render () {
    return (
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>NotFOUND Page</h1>
      </div>
    )
  }
}
