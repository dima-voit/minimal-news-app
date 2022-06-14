import React from "react";
import MyButton from "../UI/button/MyButton";

import styles from "./biography.module.scss";

const Person = (props) => {
  return(
    <tr>
      <td>{props.person.yearOfBirth}</td>
      <td>{props.person.firstName} {props.person.lastName}</td>
      <td>{props.person.description}</td>
      <td>
        <MyButton className={styles.deleteBtn} onClick={() => props.remove(props.person)}>
          X
        </MyButton>
      </td>
    </tr>
  )
}

export default Person;
