import React from "react";
import { persons } from "../../shared/personData";
import { Person } from "./Person";

export class Biography extends React.Component {

  personRow = persons.map((person) => {
    return (
      <Person 
        key={person.id}
        yearOfBirth={person.yearOfBirth}
        firstName={person.name.firstName}
        surName={person.name.surName}
        description={person.description}
      />
    )
  })

  render() {
    return(
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Name</th>
            <th>Description</th>
          </tr>
          {this.personRow}
        </tbody>
      </table>
    )
  }
}
