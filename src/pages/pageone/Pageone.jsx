import React from "react";
import styles from "./pageone.module.scss";

export class Pageone extends React.Component {

  render () {
    return (
      <div className={styles.page}>
        <h1 className={styles.pageTitle}>This day in history</h1>
        <form>
          <input/>
          <input/>
          <button>Add date</button>
        </form>
      </div>
    )
  }
}
