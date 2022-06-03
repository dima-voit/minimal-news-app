import React from "react";

import Person from "./Person";

const PersonTable = ({persons}) => {

  return (
    <table>
      <tbody>
        <tr>
          <th>Year of birth</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {persons.map(person =>
          <Person key={person.id} person={person}/>
        )}
      </tbody>
    </table>
  )
}

export default PersonTable;
