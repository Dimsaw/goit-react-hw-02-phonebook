import React, { Component } from 'react';
import ContactsList from './componets/ContactsList';
import ContactForm from './componets/ContactForm';
import Filter from './componets/Filter';
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

  formSubmitHandler = ({ name, number }) => {
    const newContact = {
      id: shortid.generate(),
      name,
      number,
    };

    if (
      this.state.contacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      return alert(`${name} is alredy in contacts`);
    }

    this.setState(prevState => ({
      contacts: [newContact, ...prevState.contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normolizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normolizedFilter),
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContacts();
    const emptyContacts = this.state.contacts;

    return (
      <>
        <h1 className={s.text}>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <div>
          <h3 className={s.contacts}>Contacts</h3>
          <Filter value={filter} onChange={this.changeFilter} />
          {emptyContacts.length > 0 && (
            <ContactsList
              contacts={visibleContact}
              onDeleteContact={this.deleteContact}
            />
          )}
          {!emptyContacts.length && <h4>Phonebook is empty</h4>}
        </div>
      </>
    );
  }
}

export default App;
