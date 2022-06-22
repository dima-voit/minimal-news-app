import React from "react";
import MyButton from "../UI/button/MyButton";

import styles from "./biography.module.scss";

const Person = (props) => {
  return(
    <tr>
      <td>{props.person.personBirth}</td>
      <td>{props.person.personName} {props.person.personLastName}</td>
      <td>{props.person.personDescription}</td>
      <td>
        <MyButton className={styles.deleteBtn} onClick={() => props.remove(props.person)}>
          X
        </MyButton>
      </td>
    </tr>
  )
}

export default Person;
