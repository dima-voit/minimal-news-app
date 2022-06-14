import React, { useState } from "react";

import PersonTable from "./PersonTable";

import styles from "./biography.module.scss";
import PersonForm from "../UI/form/PersonForm";

const Biography = () => {

  const [persons, setPersons] = useState([
    {id: 1, yearOfBirth: 1000, firstName: 'Jimmy', lastName: 'Moor', description: 'Lorem ipsum 1'},
    {id: 2, yearOfBirth: 1002, firstName: 'Jimmy', lastName: 'Moor', description: 'Lorem ipsum 2'},
    {id: 3, yearOfBirth: 1005, firstName: 'Jimmy', lastName: 'Moor', description: 'Lorem ipsum 3'},
  ]);

  const createPerson = (newPerson) => {
    setPersons([...persons, newPerson])
  }

  const removePerson = (person) => {
    setPersons(person.filter(p => p.id !== person.id))
  }

  return (
    <div className={styles.biography}>
      <PersonForm create={createPerson} />
      <PersonTable remove={removePerson} persons={persons} />
    </div>
  );
}

export default Biography;
