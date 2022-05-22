import React from "react";

export const Person = (props) => {
  
    return(
      <tr>
        <td>{props.yearOfBirth}</td>
        <td>{props.firstName}<br/>{props.surName}</td>
        <td>{props.description}</td>
      </tr>
    )
}
