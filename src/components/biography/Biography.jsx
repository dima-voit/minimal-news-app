import React, { useState } from "react";

import PersonTable from "./PersonTable";

import styles from "./biography.module.scss";
import PersonForm from "../UI/form/PersonForm";
import MySelect from "../UI/select/MySelect";

const Biography = () => {
  const [persons, setPersons] = useState([
    { id: 1, personBirth: 1000, personName: 'Gimmy', personLastName: 'Door', personDescription: 'Lorem ipsum 1' },
    { id: 2, personBirth: 412002, personName: 'Jimmy', personLastName: 'Poor', personDescription: 'Lorem ipsum 2' },
    { id: 3, personBirth: 91005, personName: 'Jimmy', personLastName: 'Moor', personDescription: 'Lorem ipsum 3' },
  ]);

  const [selectedSort, setSelectedSort] = useState('');

  const createPerson = (newPerson) => {
    setPersons([...persons, newPerson]);
  };

  const removePerson = (person) => {
    setPersons(persons.filter((p) => p.id !== person.id));
  };

  const sortPersons = (sort) => {
    setSelectedSort(sort);
    setPersons([...persons].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className={styles.biography}>
      <PersonForm create={createPerson} />
      <MySelect
        value={selectedSort}
        onChange={sortPersons}
        defaultValue="Sort by..."
        options={[
          { value: "personBirth", name: "by date" },
          { value: "personName", name: "by name" }
        ]}
      />
      {persons.length !== 0 ? <PersonTable remove={removePerson} persons={persons} /> : <h4>persons disappeared</h4>}
    </div>
  );
};

export default Biography;
