import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import contacts from './contacts.json';

function App() {
  let [firstFive, setFirstFive] = useState(contacts.splice(0, 5));
  let [restOfContacts, setRestOfContacts] = useState(contacts);
  return (
    <div className="App">
      <h2>IronContacts</h2>
      <button onClick={RandomPeople}>RandomPeople</button>
      <button onClick={sortName}>Sort Name</button>
      <button onClick={sortPopularity}>Sort Popularity</button>
      <table>
        <tr>
          <th>Picture</th>
          <th>Name</th>
          <th>Popularity</th>
          <th>Aasdkfakshf</th>
        </tr>
        <FiveCelebs />
      </table>
    </div>
  );

  function FiveCelebs() {
    return firstFive.map((eachFamousPerson) => {
      return (
        <tr style={{ margin: '0 auto', padding: '20px' }}>
          <td>
            <img
              style={{ width: '50px' }}
              src={eachFamousPerson.pictureUrl}
              alt="Holywood"
            />
          </td>
          <td>
            <p>{eachFamousPerson.name}</p>
          </td>
          <td>
            <p>{eachFamousPerson.popularity.toFixed(2)}</p>
          </td>
          <td>
            <p><button id={eachFamousPerson.id} onClick={deleteRow}>
              Delete
            </button> </p>
          </td>
        </tr>
      );
    });
  }
  function RandomPeople() {
    let random = Math.floor(Math.random() * restOfContacts.length);
    let randomContact = restOfContacts[random];

    let newRestOfContacts = [...restOfContacts];
    let newContacts = [...firstFive];

    newRestOfContacts.splice(random, 1);
    newContacts.push(randomContact);

    setFirstFive(newContacts);
    setRestOfContacts(newRestOfContacts);
  }

  function sortName() {
    let newContacts = [...firstFive].sort((a, b) => a.name.localeCompare(b.name));
    setFirstFive(newContacts)

  }

  function sortPopularity() {
    let newContacts = [...firstFive].sort((a, b) => b.popularity - a.popularity);
    setFirstFive(newContacts)
  }

  function deleteRow(e) {
    let deleteContacts = [...firstFive].filter((c) => c.id !== e.target.id);
    setFirstFive(deleteContacts)
  }
}

export default App;
