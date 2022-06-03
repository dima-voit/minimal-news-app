import React, { useState } from "react";
import MyButton from "../UI/button/MyButton";
import MyInput from "../UI/input/MyInput";

import styles from "./biography.module.scss";
import PersonTable from "./PersonTable";

const Biography = () => {

  const [persons, setPersons] = useState([
    {id: 1, yearOfBirth: 1000, firstName: 'Jimmy', lastName: 'Moor', description: 'Lorem ipsum 1'},
    {id: 2, yearOfBirth: 1002, firstName: 'Jimmy', lastName: 'Moor', description: 'Lorem ipsum 2'},
    {id: 3, yearOfBirth: 1005, firstName: 'Jimmy', lastName: 'Moor', description: 'Lorem ipsum 3'},
  ]);

  const [person, setPerson] = useState({
    personBirth: "",
    personName: "",
    personLastName: "",
    personDescription: "",
  });
  
  const addNewPerson = (e) => {
    e.preventDefault();
    console.log('click');
    const newPerson = {
      personBirth,
      personName,
      personLastName,
      personDescription

    }
    setPersons([...persons, newPerson])
    setPerson({personBirth: "", personName: "", personLastName: "", personDescription: "",})
  };

  return (
    <div className={styles.biography}>
      <form>
        <MyInput 
          value={person.personBirth}
          onChange={e => setPerson({...person, personBirth: e.target.value})}
          type="number" 
          placeholder="Year of birth" 
        />
        <MyInput 
          value={person.personName}
          onChange={e => setPerson({...person, personName: e.target.value})}
          type="text" 
          placeholder="Name" 
        />
        <MyInput
          value={person.personLastName}
          onChange={e => setPerson({...person, personLastName: e.target.value})}
          type="text"
          placeholder="Lastname"
        />
        <MyInput
          value={person.personDescription}
          onChange={e => setPerson({...person, personDescription: e.target.value})}
          type="text"
          placeholder="Description"
        />
        <MyButton onClick={addNewPerson} />
      </form>
      <PersonTable persons={persons} />
    </div>
  );
}

export default Biography;
