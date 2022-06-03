import React from "react";

import styles from "./biography.module.scss";

const Person = (props) => {
  return(
    <tr>
      <td>{props.person.yearOfBirth}</td>
      <td>{props.person.firstName} {props.person.lastName}</td>
      <td>{props.person.description}</td>
      <td>
        <button className={styles.deleteBtn} onClick={() => alert('Worked!')}>
          X
        </button>
      </td>
    </tr>
  )
}

export default Person;
