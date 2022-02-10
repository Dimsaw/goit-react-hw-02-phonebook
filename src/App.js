import React, { Component } from 'react';

import Form from './componets/Form';
import s from './App.module.css';
import shortid from 'shortid';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',

    // phone: '',
  };

  nameInputId = shortid.generate();
  // id = { this.nameInputId }; для лейл и инпут

  formSubmitHandler = data => {
    console.log(data);
  };

  render() {
    return (
      <>
        <h1 className={s.text}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />

        <div>
          <h3>Contacts</h3>
          <ul>
            {this.state.contacts.map(({ id, name, number }) => (
              <li key={id}>
                {name}: {number}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default App;
