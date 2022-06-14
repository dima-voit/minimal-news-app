import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import MyButton from "../button/MyButton";
import MyInput from "../input/MyInput";

const PersonForm = ({create}) => {
  const [person, setPerson] = useState({personBirth: "", personName: "", personLastName: "", personDescription: ""});

  const addNewPerson = (e) => {
    e.preventDefault();
    const newPerson = {
      ...person, id: uuidv4()
    }
    create(newPerson)
    setPerson({personBirth: "", personName: "", personLastName: "", personDescription: ""})
  };

  return (
    <form>
      <MyInput 
        value={person.personBirth}
        onChange={e => setPerson({...person, personBirth: e.target.value})}
        type="text" 
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
      <MyButton onClick={addNewPerson}>
        Add
      </MyButton>
    </form>
  )
}

export default PersonForm;
