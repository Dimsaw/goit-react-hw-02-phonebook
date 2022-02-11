import React, { Component } from 'react';
import Contacts from './componets/Contacts';
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
  };

  nameInputId = shortid.generate();

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };
    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  deliteContact = id => {
    this.setState(prevState => ({
      contact: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { contacts } = this.state;

    return (
      <>
        <h1 className={s.text}>Phonebook</h1>
        <Form onSubmit={this.formSubmitHandler} />

        <div>
          <h3>Contacts</h3>
          <input type="text"></input>
          <Contacts contacts={contacts} onDeleteContact={this.deliteContact} />
        </div>
      </>
    );
  }
}

export default App;
