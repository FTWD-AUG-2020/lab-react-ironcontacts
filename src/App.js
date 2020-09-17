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
            {/* <button id={eachFamousPerson.id} onClick={deleteRow}>
              Delete
            </button> */}
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
}

export default App;
