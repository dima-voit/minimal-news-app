import React from "react";

import Person from "./Person";

const PersonTable = ({persons, remove}) => {

  return (
    <table>
      <tbody>
        <tr>
          <th>Year of birth</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
        {persons.map(person =>
          <Person 
            remove={remove} 
            key={person.id} 
            person={person}/>
        )}
      </tbody>
    </table>
  )
}

export default PersonTable;
